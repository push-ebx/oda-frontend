*Требуемая версия NodeJS 18.17.0*

```
cd oda-frentend
npm inatall
npm run build
npm install pm2@latest -g
pm2 start npm -- run start -- --port=5000

cd mail
npm inatall
pm2 start index.js
```

В .env.local можно настроить порты на cms и mail-скрипт