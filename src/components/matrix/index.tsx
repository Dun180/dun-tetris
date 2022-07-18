import React from 'react';
import './index.scss';
import classnames from "classnames";



export default function Matrix(props:any) {

    let matrix: any;
    return (
        <div className="matrix">{
            matrix.map((p: any, k1: any) => (<p key={k1}>
                {
                    p.map((e: any, k2: any) => <b
                        className={classnames({
                            c: e === 1,
                            d: e === 2,
                        })}
                        key={k2}
                    />)
                }
            </p>))
        }
        </div>
    );
}

