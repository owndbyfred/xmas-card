var maxSnowflake = 100;
var content = ['\u2744', '\u2745', '\u2746'];

// document.addEventListener('DOMContentLoaded', function (event) {
//   for (let i = 0; i < maxSnowflake; i++) {
//     let snowFlakeWrapper = document.createElement('div');
//     snowFlakeWrapper.classList.add('snow-wrapper');
//     let snowFlake = document.createElement('div');
//     snowFlake.classList.add('snow-flake');

//     //Set the snowflake type
//     let snowFlakeSymbolNumber = Math.floor(Math.random() * content.length);
//     let snowFlakeSymbol = document.createTextNode(
//       content[snowFlakeSymbolNumber]
//     );
//     snowFlake.appendChild(snowFlakeSymbol);

//     //Set the snowflake font-size
//     let fontsize = Math.floor(Math.random() * 24 + 5);
//     snowFlake.style.fontSize = fontsize + 'px';

//     //Set Snowflake horizontal position
//     let horizontal = Math.floor(Math.random() * 100);
//     snowFlakeWrapper.style.left = horizontal + '%';

//     snowFlakeWrapper.style.top = '-55px';

//     //Set Snowflake animation duration
//     let duration = Math.floor(Math.random() * 10 + 5);
//     snowFlake.style.animationDuration = 40 - fontsize + 's';
//     snowFlakeWrapper.style.animationDuration = 40 - fontsize + 's';

//     //Set Snowflake animation delay
//     let delay = Math.floor(Math.random() * 15);
//     snowFlake.style.animationDelay = delay + 's';
//     snowFlakeWrapper.style.animationDelay = delay + 's';

//     snowFlakeWrapper.appendChild(snowFlake);
//     document.body.appendChild(snowFlakeWrapper);
//   }
// });

function snow() {
  for (let i = 0; i < maxSnowflake; i++) {
    let snowFlakeWrapper = document.createElement('div');
    snowFlakeWrapper.classList.add('snow-wrapper');
    let snowFlake = document.createElement('div');
    snowFlake.classList.add('snow-flake');

    //Set the snowflake type
    let snowFlakeSymbolNumber = Math.floor(Math.random() * content.length);
    let snowFlakeSymbol = document.createTextNode(
      content[snowFlakeSymbolNumber]
    );
    snowFlake.appendChild(snowFlakeSymbol);

    //Set the snowflake font-size
    let fontsize = Math.floor(Math.random() * 24 + 5);
    snowFlake.style.fontSize = fontsize + 'px';

    //Set Snowflake horizontal position
    let horizontal = Math.floor(Math.random() * 100);
    snowFlakeWrapper.style.left = horizontal + '%';

    snowFlakeWrapper.style.top = '-55px';

    //Set Snowflake animation duration
    let duration = Math.floor(Math.random() * 10 + 5);
    snowFlake.style.animationDuration = 40 - fontsize + 's';
    snowFlakeWrapper.style.animationDuration = 40 - fontsize + 's';

    //Set Snowflake animation delay
    let delay = Math.floor(Math.random() * 15);
    snowFlake.style.animationDelay = delay + 's';
    snowFlakeWrapper.style.animationDelay = delay + 's';

    snowFlakeWrapper.appendChild(snowFlake);
    document.body.appendChild(snowFlakeWrapper);
  }
}

snow();
