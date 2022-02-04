if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3Metamask = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/3be8ee0f25324e1cbcf6e35f00f5b3ce"
  );
  web3Metamask = new Web3(provider);
}





AFRAME.registerComponent('raycaster-img', {
    schema: {
        video: {type: 'selector'},
        visible: {type: 'selector'}
      },
  
    init: function () {

    const el= this.el;

    const videoToPlay = this.data.video;
    const videoVisible = this.data.visible;

    const ipAPI = '//api.ipify.org?format=json';
    
     console.log("El es ", el);
     console.log(videoVisible);

      this.el.addEventListener('mouseenter', ()=> {
        console.log(videoToPlay)
        videoToPlay.play();
        
        videoVisible.setAttribute("visible","true");
        el.setAttribute("visible","false");
        

      });

      this.el.addEventListener('mouseleave', ()=> {

        videoToPlay.pause();

        
        videoVisible.setAttribute("visible","false");
        el.setAttribute("visible","true");
        
        videoToPlay.currentTime = 0;
        videoToPlay.load();
        

      });

      
      this.el.addEventListener('click', ()=> {

      

      //Swal.fire('Mint!')


        

      });
    
    }

  });


  AFRAME.registerComponent('raycaster-biblia', {

    init: function () {

    const el= this.el;


      document.querySelector("a-scene").addEventListener("loaded", ()=>{
      
        const biblia = document.getElementById('biblia');
        const ambientLight = document.getElementById('ambientLight');
        const spotLight = document.getElementById('spotLight');
        const etherModel = document.getElementById("etherModel");
        const images = document.getElementById("todos");
        
        console.log("Luz",images);  
      
      this.el.addEventListener('mouseenter', ()=> {

      ambientLight.setAttribute("visible","false");
      spotLight.setAttribute("visible", "true");
      images.setAttribute("visible","false");
      etherModel.setAttribute("visible", "true");
      

      });

      this.el.addEventListener('mouseleave', ()=> {

        ambientLight.setAttribute("visible","true");
        spotLight.setAttribute("visible", "false"); 
        images.setAttribute("visible","true");
        etherModel.setAttribute("visible", "false");
        


      });

      
      this.el.addEventListener('click', ()=> {

      

      //Swal.fire('Mint!')


        

      });

    })
    
    }

  });
