import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./proizvodi.css";
import Side from "../komponente/side.js";

const Proizvod = ({ match }) => <p>{match.params.id}</p>;
class Proizvodi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "klime",
          index: 0,
          data: [
            {
              id: "kl1",
              title: "GREE Klima uređaj",
              content: "Best Buy Wi Fi Inverter 12000 BTU, R410A, A++/A+/A+++(hlađenje/grejanje (srednja zona)/grejanje (srednja zona)/grejanje (topla zona)",
              cena : "52.999"
            },
            {
              id: "kl2",
              title: "BOSCH Klima uređaj",
              content: "Climate 5000 RAC Inverter 12000 BTU, R410A, A++/A+ (hlađenje/grejanje)",
              cena : "49.999"
            },
            {
              id: "kl3",
              title: "GREE Klima uređaj",
              content: "Amber Premium Inverter WiFi - GWH12YD-S6DBA2A 12000 BTU, Eko gas R32, A+++/A+++ (hlađenje/grejanje)",
              cena : "99.999"
            }
          ]
        },
        {
          name: "monitori",
          index: 1,
          data: [
            {
              id: "m1",
              title: "AOC LED",
              content: "C24G1 24 \", VA, 1920 x 1080 Full HD, 1ms",
              cena : "24.999"
             
            },
            {
              id: "m2",
              title: "SAMSUNG QLED",
              content: "C49HG90 - LC49HG90DMU 48.9\", VA, 3840 x 1080 Dual HD, 1ms",
              cena : "109.999"
            },
            {
              id: "m3",
              title: "LG LED 29\"",
              content: "UltraWide 29UM69G-B IPS FullHD 29\", IPS, 2560 x 1080 UWHD, 5ms",
              cena : "27.999"
             
            }
          ]
        },
        {
          name: "misevi",
          index: 2,
          data: [
            {
              id: "mi1",
              title: "REDRAGON gejmerski miš",
              content: "Emperor M909-RGB - B07F532TCN Optički, 12400dpi, Ergonomski dizajniran, Crna",
              cena:"3.799"
            },
            {
              id: "mi2",
              title: "RAZER gejmerski miš",
              content: "DeathAdder Elite - RZ01-02010100-R3G1 Optički, 16000dpi, Dizajniran za desnu ruku, Crna",
              cena:"9.999"
            },
            {
              id: "mi3",
              title: "HP bežični miš",
              content: "Z3700 (Plavi) - V0L81AA Optički, 1200dpi, 2.4GHz",
              cena:"1.499"
            }
          ]
        },
        {
          name: "telefoni",
          index: 3,
          data: [
            {
              id: "t1",
              title: "XIAOMI Redmi Note 7",
              content: "64/4GB (Plava - Neptun Blue) - 6.3\", 4 GB, 48.0 Mpix + 5.0 Mpix, 64 GB ",
              cena:"25.999"
            },
            {
              id: "t2",
              title: "HUAWEI Y5 (2019)",
              content: "16/2GB DS (Crni - Modern Black) - 51093SGT, 5.71\", 2 GB, 13.0 Mpix, 16 GB",
              cena:"13.999"
            },
            {
              id: "t3",
              title: "SAMSUNG GALAXY A50",
              content: "128/4GB DS (Crna) - SM-A505FZKSSEE, 6.4\", 4 GB, 25.0 Mpix + 8.0 Mpix + 5.0 Mpix, 128 GB",
              cena:"37.999"
            }
          ]
        },
        {
          name: "kamere",
          index: 4,
          data: [
            {
              id: "k1",
              title: "GOPRO HERO7",
              content: "Silver + GOPRO Travel Kit + SANDISK Extreme microSDHC 32GB 10 MP",
              cena:"35.999"
            },
            {
              id: "k2",
              title: "GOPRO HERO7",
              content: "Black (+ MicroSD 128GB) - CHDHX-701-RW - CMOS, 12 MP",
              cena:"56.999"
            },
            {
              id: "k3",
              title: "DJI Osmo Pocket",
              content: "CMOS, 3840 x 2160 (4K), 12 MP",
              cena:"44.999"
            }
          ]
        },
        {
          name: "tableti",
          index: 5,
          data: [
            {
              id: "tab1",
              title: "HUAWEI Mediapad T3",
              content: "10\" (Siva) 9.6\", Četiri jezgra, 2GB, WiFi",
              cena:"17.999"
            },
            {
              id: "tab2",
              title: "SAMSUNG Galaxy Tab A (2019)",
              content: "(Crni) - SM-T510NZKDSEE 10.1\", Osam jezgara, 2GB, WiFi",
              cena:"25.999"
            },
            {
              id: "tab3",
              title: "MLS Alu Plus 4G (Srebrna)",
              content: "33.ML.540.163 10.1\", Osam jezgara, 2GB, 4G/WiFi",
              cena:"13.589"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Proizvodi</h1>
        <div>
          <Side products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default Proizvodi;
