import React,{ useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import Matrix from "../components/matrix";
import classnames from "classnames";

const App = (props:any) => {

    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const [height, setHeight] = useState(document.documentElement.clientHeight);

    const resize = () => {
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight);
    }

    let filling = 0;
    const size = (() => {
        const w = width;
        const h = height;
        const ratio = h/w;
        let scale;
        let css: any = {};
        if(ratio < 1.5) {
            scale = h / 960;
        }else {
            scale = w / 640;
            filling = (h - (960 * scale)) / scale / 3;
            css = {
                paddingTop: Math.floor(filling) + 42,
                paddingBottom: Math.floor(filling),
                marginTop: Math.floor(-480 - (filling * 1.5)),
            };
        }
        css.transform = `scale(${scale})`;
        return css;
    })();
    return (
        <div
            className="app"
            style={size}
        >
            <div className={classnames({ rect: true, drop: props.drop })}>

                <div className="screen">
                    <div className="panel">
                        <Matrix
                            matrix={props.matrix}
                            cur={props.cur}
                            reset={props.reset}
                        />

                    </div>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state:any) => ({
    pause: state.get('pause'),
    music: state.get('music'),
    matrix: state.get('matrix'),
    next: state.get('next'),
    cur: state.get('cur'),
    speedStart: state.get('speedStart'),
    speedRun: state.get('speedRun'),
    startLines: state.get('startLines'),
    clearLines: state.get('clearLines'),
    points: state.get('points'),
    max: state.get('max'),
    reset: state.get('reset'),
    drop: state.get('drop'),
    keyboard: state.get('keyboard'),
});
export default connect(mapStateToProps)(App)
