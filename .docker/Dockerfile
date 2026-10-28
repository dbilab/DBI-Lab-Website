# start with official ruby docker image as base
FROM ruby:3.3-bookworm

# set working directory within container
WORKDIR /usr/src/app

# pull in ruby (jekyll) and python (cite process) package info
COPY Gemfile* _cite/requirements.txt ./

# install ruby packages
RUN if [ -f Gemfile.lock ]; then \
      VERSION=$(grep -A 1 'BUNDLED WITH' Gemfile.lock | tail -n 1 | xargs); \
      gem install bundler --version "${VERSION}" && \
      bundle "_${VERSION}_" install; \
    else \
      bundle install; \
    fi

# install python
RUN apt-get update && apt-get install -y --no-install-recommends python3 python3-pip python3-venv \
    && rm -rf /var/lib/apt/lists/*

# install python packages in a virtual environment
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

RUN python3 -m pip install --no-cache-dir --upgrade \
    --requirement requirements.txt "watchdog[watchmedo]==3.0.0"

# ports used by jekyll
EXPOSE 4000
EXPOSE 35729

# run jekyll and cite process
COPY .docker/entrypoint.sh /var
CMD [ "/var/entrypoint.sh" ]
