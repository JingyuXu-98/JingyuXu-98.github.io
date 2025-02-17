document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded triggered'); // 调试日志
  
  if (typeof particlesJS === 'undefined') {
    console.error('particles.js not loaded!');
    return;
  }

  try {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#000000'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.3,
          random: false
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#000000',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 4,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
    console.log('particles.js initialized'); // 调试日志
  } catch (error) {
    console.error('Error initializing particles.js:', error);
  }
}); 