import React, {useEffect, useState} from 'react';

const FloatingChe = () => {
    const [cheCount, setCheCount] = useState(1);
    const [cheTop, setCheTop] = useState("35rem");
    const [cheLeft, setCheLeft] = useState("8%");
    const [tranquiTop, setTranquiTop] = useState("36rem");
    const [tranquiLeft, setTranquiLeft] = useState("7.5%");

    const setCheCoordinates = () => {
        let height = document.documentElement.scrollHeight;
        let width = document.documentElement.scrollWidth;
        switch (cheCount) {
            default:
            case 1:
                setCheTop("35rem");
                setCheLeft("8%");
                setTranquiTop("36rem");
                setTranquiLeft("7.5%");
                break;
            case 2:
                setCheTop((0.5 * height) + "px");
                setCheLeft("8%");
                setTranquiTop("36rem");
                setTranquiLeft("86%");
                break;
            case 3:
                setCheTop((0.7 * height) + "px");
                setCheLeft("64%");
                setTranquiTop("6%");
                setTranquiLeft((0.4 * width) + "px");
                break;
            case 4:
                setCheTop((0.53 * height) + "px");
                setCheLeft("85%");
                setTranquiTop((0.533 * height) + "px");
                setTranquiLeft("84.5%");
                break;
            case 5:
                setCheTop((0.2 * height) + "px");
                setCheLeft("87%");
                setTranquiTop("36rem");
                setTranquiLeft("10%");
                break;
            case 6:
                setCheTop("7%");
                setCheLeft("87%");
                setTranquiTop("7%");
                setTranquiLeft("8%");
                break;
            case 7:
                setCheTop("36rem");
                setCheLeft("9.5%");
                setTranquiTop("34.5rem");
                setTranquiLeft("7%");
                break;
            }
    }

    const incrementCheCount = () => {
        let newCount = cheCount + 1;
            if (newCount > 7) {
                newCount = 1;
            }
            setCheCount(newCount);
    }

    useEffect(() => {
        setCheCoordinates();
        // eslint-disable-next-line react-hooks/exhaustive-deps
		}, [cheCount]);

    return (
			<React.Fragment>
				<p className="floatingChe" id="floatingCheFirstPart" onClick={incrementCheCount} style={{top: cheTop, left: cheLeft}}>
					Che
				</p>
				<p className="floatingChe" id="floatingCheSecondPart" onClick={incrementCheCount} style={{top: tranquiTop, left: tranquiLeft}}>
					Tranqui
				</p>
			</React.Fragment>
    );
};

export default FloatingChe;