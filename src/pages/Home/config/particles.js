export default {
  'particles': {
    'number': {
      'value': 20,
      'density': {
        'enable': true,
        'value_area': 800
      }
    },
    'color': {
      'value': '#3151d9'
    },
    'shape': {
      'type': 'circle',
      'stroke': {
        'width': 3,
        'color': '#3151d9'
      },
      'polygon': {
        'nb_sides': 4
      },
      'image': {
        'src': 'img/github.svg',
        'width': 100,
        'height': 100
      }
    },
    'opacity': {
      'value': 0.5,
      'random': false,
      'anim': {
        'enable': false,
        'speed': 1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 2,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 40,
        'size_min': 0.1,
        'sync': false
      }
    },
    'line_linked': {
      'enable': true,
      'distance': 100,
      'color': '#3151d9',
      'opacity': 0.38481889460772545,
      'width': 1
    },
    'move': {
      'enable': true,
      'speed': 1,
      'direction': 'top-right',
      'random': true,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false,
        'rotateX': 561.194221302933,
        'rotateY': 1200
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false,
        'mode': 'repulse'
      },
      'onclick': {
        'enable': true,
        'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 328.8912709820448,
        'line_linked': {
          'opacity': 1
        }
      },
      'bubble': {
        'distance': 316.71011279752463,
        'size': 40,
        'duration': 2,
        'opacity': 8,
        'speed': 3
      },
      'repulse': {
        'distance': 276.1062521824573,
        'duration': 0.4
      },
      'push': {
        'particles_nb': 4
      },
      'remove': {
        'particles_nb': 2
      }
    }
  },
  'retina_detect': true
}
