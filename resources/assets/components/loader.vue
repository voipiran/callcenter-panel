<template>
  <div class="loader-ctn">
    <div class="loading">
      <div class="loading__letter">L</div>
      <div class="loading__letter">O</div>
      <div class="loading__letter">A</div>
      <div class="loading__letter">D</div>
      <div class="loading__letter">I</div>
      <div class="loading__letter">N</div>
      <div class="loading__letter">G</div>
      <div class="loading__letter">.</div>
      <div class="loading__letter">.</div>
      <div class="loading__letter">.</div>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Audiowide);

.loader-ctn {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: ltr;
}

.loading {
  display: flex;
  flex-direction: row;
}
.loading__letter {
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: "Audiowide";
  color: #fec468;
  animation-name: bounce;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
}

.loading__letter:nth-child(2) {
  animation-delay: .1s;	
}
.loading__letter:nth-child(3) {
  animation-delay: .2s;
}
.loading__letter:nth-child(4) {
  animation-delay: .3s;	
}
.loading__letter:nth-child(5) {
  animation-delay: .4s;
}
.loading__letter:nth-child(6) {
  animation-delay: .5s;	
}
.loading__letter:nth-child(7) {
  animation-delay: .6s;
}
.loading__letter:nth-child(8) {
  animation-delay: .8s;
}
.loading__letter:nth-child(9) {
  animation-delay: 1s;
}
.loading__letter:nth-child(10) {
  animation-delay: 1.2s;
}
.loading__letter:nth-child(11) {
  animation-delay: 1.4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0px)
  }
  40% {
    transform: translateY(-20px);
  }
  80%,
  100% {
    transform: translateY(0px);
  }
}


@media (max-width: 700px) {
  .loading__letter {
    font-size: 20px;
  }
}

@media (max-width: 340px) {
  .loading__letter {
    font-size: 10px;
  }
}
</style>