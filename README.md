<p align="center">
<a href="https://dragoma.io" target="_blank" rel="noopener noreferrer"><img width="32"  src="https://img.dragoma.io/resources/DMA_logo200.png" alt="Dragoma logo"></a>&nbsp;&nbsp;
<a href="https://dragoma.io" target="_blank" rel="noopener noreferrer"><img width="32"  src="https://img.dragoma.io/resources/DDD_logo200.png" alt="Dragoma logo"></a>
</p>

<p align="center">
  <a href="https://github.com/dragonernft"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true" alt="Chat"></a>
  <a href="https://www.youtube.com/watch?v=46Qd6BYF-sQ&feature=youtu.be"><img src="https://img.shields.io/youtube/channel/views/UCuSyLsNuPuQew10YhrboTLw" alt="License"></a>
  <a href="https://twitter.com/dragoma_club"><img src="https://img.shields.io/twitter/follow/dragoma_club" alt="Build Status"></a>
</p>

## Dragoma 

Dragoma is a Web3 lifestyle sports application with built-in GameFi and SocialFi elements, built on the polygon network.In order to implement the privatization of Web3 assets, we adopt a dual-token economic model and NFT the in-app assets to ensure an open and transparent economic ecology.And How to Train Your Dragon was one of the first major games to use the power and flexibility of the Polygon network. You can form dragon training teams to compete with others and earn rewards through training, challenges, battles, breeding, building, and more.

These Dragon are the NFT of Dragoma, 
<p align="center">
  <a target="_blank" href="https://drogma.io/">
    <img alt="sponsors" src="https://1386690580-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7gJ5nII4cpjTkiu07Oko%2Fuploads%2FM0lPqK6lalB1GoXtU6Tg%2F%E7%BB%84%201565.png?alt=media&token=bd98fba6-111d-4ec7-bda2-1e463bb1836a">
  </a>
</p>

### How to play
How to get involved in dragoma
When you join for the first time, log in to the official website and you will get 1 free dragon pet. You can start playing with the free dragon pet you received. Take part in the construction of the world of How to Train Your Dragon.


### Dragoma Contracts
DDT Implementation of https://eips.ethereum.org/EIPS/eip-721 <br/>
DMA Implementation of https://eips.ethereum.org/EIPS/eip-20  <br/>
DDD Implementation of https://eips.ethereum.org/EIPS/eip-20  <br/>

### install dependencies
```js
npm i
```

### compile contracts
```js
npm run compile
```

### deploy: <br/> 
you need deploy files, see migrations files <br/>
deploy chose network  --network 

```js
truffle migrate --network polygon_test
```


### verify contracts 
```js
truffle run verify DDDToken@0x... --network polygon_test
```

### run test 
see the test directory please
```js
npm run test
```

### unit test 
run unit test or operate network data, see the utils directory 
```js
node utils/operator.js
```
