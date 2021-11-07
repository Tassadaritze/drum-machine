import React from "react";
import "./Drums.css";

type DrumsState = {
    display: string
};

class Drums extends React.Component<Record<string, never>, DrumsState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            display: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(): void {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleClick(e: React.MouseEvent): void {
        if (e.currentTarget.lastChild instanceof HTMLAudioElement) e.currentTarget.lastChild.play();
        this.setState({ display: e.currentTarget.id })
    }

    handleKeyPress(e: KeyboardEvent): void {
        const audio = document.getElementById(e.key.toUpperCase());
        if (audio instanceof HTMLAudioElement) audio.play();
        if (audio && audio.parentElement) this.setState({ display: audio.parentElement.id });
    }

    render(): React.ReactNode {
        return (
            <div className="Drums" id="drum-machine">
                <div id="display">{this.state.display}</div>
                <button className="drum-pad" id="QBtn" type="button" onClick={this.handleClick}>
                    Q
                    <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
                </button>
                <button className="drum-pad" id="WBtn" type="button" onClick={this.handleClick}>
                    W
                    <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
                </button>
                <button className="drum-pad" id="EBtn" type="button" onClick={this.handleClick}>
                    E
                    <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
                </button>
                <button className="drum-pad" id="ABtn" type="button" onClick={this.handleClick}>
                    A
                    <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
                </button>
                <button className="drum-pad" id="SBtn" type="button" onClick={this.handleClick}>
                    S
                    <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
                </button>
                <button className="drum-pad" id="DBtn" type="button" onClick={this.handleClick}>
                    D
                    <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
                </button>
                <button className="drum-pad" id="ZBtn" type="button" onClick={this.handleClick}>
                    Z
                    <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
                </button>
                <button className="drum-pad" id="XBtn" type="button" onClick={this.handleClick}>
                    X
                    <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
                </button>
                <button className="drum-pad" id="CBtn" type="button" onClick={this.handleClick}>
                    C
                    <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
                </button>
            </div>
        )
    }
}

export default Drums;