import React, {useContext, useEffect, useState} from "react";
import {getTrackBackground, Range} from "react-range";
import {SideBarContext} from "../../SideBarContext";

const MIN = 0;
const MAX = 100;

export default function SideBarBlurChange() {
    const {someValue, setSomeValue} = useContext(SideBarContext);
    const [values, SetValues] = useState(someValue);

    useEffect(() => {
        setSomeValue(values)
    })

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <Range
                    values={values}
                    min={MIN}
                    max={MAX}
                    onChange={(values) => SetValues(values)}
                    renderTrack={({props, children}) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: "2px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                        values: values,
                                        colors: ["#548BF4", "#ccccccb0"],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: "center"
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}

                    renderThumb={({props, isDragged}) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "25px",
                                width: "25px",
                                borderRadius: "2px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "rgb(170 170 170 / 70%) 0px 2px 7px",
                                outline: "none"
                            }}
                        >
                            <div>
                                <div style={{
                                    height: "16px",
                                    width: "4px",
                                    backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                }}
                                />
                                <div style={{position: "relative"}}>
                                    <output style={{
                                        position: "absolute",
                                        right: "-10px",
                                        top: "5px",
                                    }} id="output">
                                        {values[0].toFixed()}%
                                    </output>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
        </>
    );
}



