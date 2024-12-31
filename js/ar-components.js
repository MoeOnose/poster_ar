// ARのアニメーション用のカスタムコンポーネント
AFRAME.registerComponent('mytarget', {
    init: function() {
    this.el.addEventListener('targetFound', event => {
        console.log("target found");
        // ターゲットが見つかった時の処理
    });
    this.el.addEventListener('targetLost', event => {
        console.log("target lost");
        // ターゲットを見失った時の処理
    });
    }
});
AFRAME.registerComponent('mytarget', {
    init: function() {
    console.log("Component initialized");
    const modelEl = this.el.querySelector('a-gltf-model');
    modelEl.addEventListener('model-loaded', () => console.log('Model loaded'));
    modelEl.addEventListener('model-error', (error) => console.log('Model error:', error));
    }
});
