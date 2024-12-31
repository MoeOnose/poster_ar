document.addEventListener('DOMContentLoaded', async () => {
    // ローディングコンポーネントの読み込み
    try {
        const loadingContainer = document.getElementById('loading-container');
        const response = await fetch('./components/loading.html');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        loadingContainer.innerHTML = content;

    // ローディングアニメーションの制御
    const progress = document.querySelector('.progress-fill');
    const percentage = document.querySelector('.percentage');
    
    // function simulateLoading() {
    //   return new Promise(resolve => {
    //     const totalSteps = 100;
    //     let currentStep = 0;
        
    //     const interval = setInterval(() => {
    //       currentStep++;
    //       const progressWidth = (currentStep / totalSteps) * 100;
    //       progress.style.width = `${progressWidth}%`;
    //       percentage.textContent = `${currentStep}%`;
          
    //       if (currentStep >= 100) {
    //         clearInterval(interval);
    //         resolve();
    //       }
    //     }, 30);
    //   });
    // }

    // ARシーンの読み込み完了を監視
    const scene = document.querySelector('a-scene');
    // scene.addEventListener('loaded', async () => {
    //   await simulateLoading();
      
    //   // ローディング完了後にローディング画面を非表示
    //   loadingContainer.style.display = 'none';
    // });
    scene.addEventListener('arReady', () => {
        // ARマーカー検出用の枠が表示されたら、ローディング画面を非表示
        loadingContainer.style.display = 'none';
      });
          // プログレスバーのアニメーション
    function simulateLoading() {
        return new Promise(resolve => {
          const totalSteps = 100;
          let currentStep = 0;
          
          const interval = setInterval(() => {
            currentStep++;
            const progressWidth = (currentStep / totalSteps) * 100;
            progress.style.width = `${progressWidth}%`;
            percentage.textContent = `${currentStep}%`;
            
            if (currentStep >= 100) {
              clearInterval(interval);
              resolve();
            }
          }, 30);
        });
      }
      simulateLoading();
  } catch (error) {
    console.error('Loading error:', error);
  }
});

