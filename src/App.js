import './App.css';
import { Component } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import 'tachyons';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

class App extends Component {
  constructor() {
    super();
    this.state = {
      init: false,
      input:'',

    };
  }
  oninputchange = (event) => {
    console.log(event.target.value);
  }
  onpress = (key) => {
    console.log('click')
  }

  componentDidMount() {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      this.setState({ init: true });
    });
  }

  particlesLoaded = (container) => {
    console.log(container);
  };

  options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 180,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 400,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  render() {
    const { init } = this.state;

    if (!init) return null;

    return (
      <div className="App">
        <Particles
          id="tsparticles"
          particlesLoaded={this.particlesLoaded}
          options={this.options}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm  oninputchange={this.oninputchange} onpress={this.onpress} />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
