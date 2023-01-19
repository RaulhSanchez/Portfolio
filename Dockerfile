FROM node:18-alpine as base

WORKDIR /portfolio

COPY --chown=node:node ./package*.json ./
RUN npm install
COPY . .

#FROM base as test
#RUN yarn test:e2e --silent=false

FROM base as build
RUN npm prune

FROM node:18-alpine3.15 as final
WORKDIR /portfolio
#ENV NODE_ENV production
COPY --from=build portfolio/package*.json ./
COPY --from=build portfolio/node_modules node_modules
#COPY --from=build src/../dist dist


USER node


ENTRYPOINT ["npm", "start"]