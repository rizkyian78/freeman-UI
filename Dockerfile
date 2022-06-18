FROM node:14-alpine

WORKDIR /app

RUN echo -e '\
module.exports={\n\
}\
' >> next-env.js

COPY . .

RUN yarn build


RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs ./.next


USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]

