FROM node:22.18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
# remove dev dependencies
RUN npm prune --production

ENV PORT=3333
ENV NODE_ENV=development
ENV DATABASE_URL="postgresql://docker:docker@localhost:5433/upload"
ENV CLOUDFLARE_ACCOUNT_ID="#"
ENV CLOUDFLARE_ACCESS_KEY_ID="#"
ENV CLOUDFLARE_SECRET_ACCESS_KEY="#"
ENV CLOUDFLARE_BUCKET="#"
ENV CLOUDFLARE_PUBLIC_URL="http://localhost"

EXPOSE 3333

CMD ["npm", "run", "start"]