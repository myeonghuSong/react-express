const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/any',
          'name': '홍길동',
          'birthday': '940811',
          'gender': '남자',
          'job': '취준생'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/1',
          'name': '동홍길',
          'birthday': '910811',
          'gender': '여자',
          'job': '프로그래머'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/2',
          'name': '길동홍',
          'birthday': '920811',
          'gender': '남자',
          'job': '디자이너'
        },
      ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));