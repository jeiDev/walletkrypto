import Title from "~/components/apps/title";
import Slider from "~/components/apps/slider";
import CardPrice from "~/components/apps/card/price";
import style from "~/styles/pages/home/section2.module.css";
import { numberShort } from "~/helpers/number.helper";
import { CardPricePropsI } from "~/interfaces/apps/card/card.interface";
import { useEffect, useState } from "react";
import { breakPoints } from "~/helpers/window.helper";

const breakPoint = {
    3: {
        min: 1000
    },
    2: {
        min: 770,
        max: 999
    },
    1: {
        min: 0,
        max: 769
    }
}

const Section2 = () => {
    const [grid, setGrid] = useState(3);

    useEffect(() => {
        breakPoints(window.innerWidth, breakPoint, (grid) => {
            if(!grid) return;
            setGrid(grid);

            window.addEventListener('resize', () => {
                breakPoints(window.innerWidth, breakPoint, (grid) => {
                    if(!grid) return;
                    setGrid(grid);
                });
            });
        })
    }, []);

    const items: Array<CardPricePropsI> = [
        {
            title: "Bitcoin",
            image: "bg-bitcoin.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
            price: numberShort(43700),
            button: {
                title: "Trade now",
                href: "#"
            }
        },
        {
            title: "Litecoin",
            image: "bg-litecoin.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
            price: numberShort(158, 3),
            button: {
                title: "Trade now",
                href: "#"
            }
        },
        {
            title: "Ethereum",
            image: "bg-ethereum.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
            price: numberShort(3000),
            button: {
                title: "Trade now",
                href: "#"
            }
        },
        {
            title: "Bitcoin 2",
            image: "bg-bitcoin.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
            price: numberShort(43700),
            button: {
                title: "Trade now",
                href: "#"
            }
        },
        {
            title: "Litecoin 3",
            image: "bg-litecoin.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
            price: numberShort(158, 3),
            button: {
                title: "Trade now",
                href: "#"
            }
        },
        {
            title: "Ethereum 4",
            image: "bg-ethereum.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
            price: numberShort(3000),
            button: {
                title: "Trade now",
                href: "#"
            }
        }
    ]

    console.log({grid})
    return (
        <section className="container">
            <div className={style.contain}>
                <Title>Available Creyptos</Title>
                <p style={{paddingBottom: 50}}>Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</p>

                <Slider 
                    grid={grid}
                    items={items} 
                    Render={({item}) => {
                        const _item: CardPricePropsI = item;
                        return (
                            <CardPrice {..._item} />
                        )
                    }}
                />
            </div>
        </section>
    )
}

export default Section2;