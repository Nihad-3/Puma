import axios from "axios";
import "../Home/mainHome.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Video } from "../../Components/VideoBlock/Video";
import { ViewCard } from "../../Components/ViewCard/ViewCard";
import { ExploreCard } from "../../Components/ExploreCard/ExploreCard";
import { Slider } from "../../Components/Slider/Slider";
import { UserImage } from "../../Components/UserImage/UserImage";
import { useAuth } from "../../Contexts/AuthContext";
export const Home = () => {
  const [sliderProduct, setSliderProduct] = useState([]);
  const [productData, setProductData] = useState([]);
  const getProductData = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setProductData(res.data));
  };
  const getHomeProductData = () => {
    axios
      .get("http://localhost:3000/HomeProduct")
      .then((res) => setSliderProduct(res.data));
  };
  useEffect(() => {
    getProductData();
    getHomeProductData();
  }, []);
  useEffect(() => {
    setProductData((prevData) => [...prevData, ...sliderProduct]);
  }, [sliderProduct]);
  console.log(productData);
  return (
    <>
      <main>
        <Video pumaVideo1={"/src/assets/video/pumaVideo1.mp4"} />
        <section className="shop-now-section">
          <div className="product-info">
            <h2 className="marka-head">FENTY x PUMA</h2>
            <p className="marka-par">
              THE CREEPER PHATTY EARTH TONE EXCLUSIVE TAUPE COLORWAY AVAILABLE
              NOW
            </p>
            <Link className="marka-link">SHOP NOW</Link>
          </div>
        </section>
        <Video pumaVideo1={"/src/assets/video/pumaintroduction.mp4"} />
        <section className="game-section">
          <div className="game-block">
            <h2 className="game-head">SEE THE GAME LIKE WE DO</h2>
            <p className="game-par">
              When you’re fast, you set the pace. The game moves slower. The
              ball looks bigger. This is how the greats – from Neymar Jr to
              Breanna Stewart, LaMelo Ball to Felix Streng – change the game.
              This is how they win. PUMA invites you to break through your
              limits, unlock transcendent athletic performance, and see the game
              like we do: FOREVER. FASTER.
            </p>
            <div className="link-block">
              <Link className="shop-link">SHOP NOW</Link>
              <Link className="shop-link">EXPLORE MORE</Link>
            </div>
          </div>
        </section>
        <Slider HeaderText={"EXPLORE THE COLLECTION"} />
        <section className="upTo-section">
          <div className="contanier">
            <div className="upTo-block">
              <h3 className="upto-head">UP TO 60% OFF</h3>
              <p className="upto-par">
                UNLOCK SAVINGS WITH CODE <span>SAVE BIG</span>
              </p>
              <p className="exclusive-par">EXCLUSIONS APPLY</p>
              <Link className="shop-link">SHOP NOW</Link>
            </div>
          </div>
        </section>
        <section className="spring-styles-section">
          <div className="contanier">
            <div className="spring-styles-block">
              <div className="spring-header">
                <h3 className="spring-head">SAVE ON SPRING STYLES</h3>
              </div>
              <div className="spring-card">
                <ViewCard
                  viewImg={"/src/assets/image/springImg.jpg"}
                  viewName={"NEW TO SALE"}
                  customClass={"different-card"}
                />
                <ViewCard
                  viewImg={"/src/assets/image/springImg2.jpg"}
                  viewName={"SLIDES $25 + UNDER"}
                  customClass={"different-card"}
                />
                <ViewCard
                  viewImg={"/src/assets/image/springImg3.jpg"}
                  viewName={"SPRING ESSENTIALS"}
                  customClass={"different-card"}
                />
                <ViewCard
                  viewImg={"/src/assets/image/springImg4.jpg"}
                  viewName={"TEES $25 + UNDER"}
                  customClass={"different-card"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="forever-section">
          <div className="contanier">
            <div className="forever-block">
              <h3 className="forever-head">FOREVER. FASTER.</h3>
              <p className="forever-par">SEE THE GAME LIKE WE DO</p>
              <Link className="forever-link">SHOP NOW</Link>
            </div>
          </div>
        </section>
        <section className="gym-section">
          <div className="contanier">
            <div className="gym-block">
              <ViewCard
                customClass={"changeGap"}
                viewName={"SOCCER"}
                viewImg={"/src/assets/image/gymImg.jpg"}
              />
              <ViewCard
                customClass={"changeGap"}
                viewName={"BASKETBALL"}
                viewImg={"/src/assets/image/gymImg2.jpg"}
              />
              <ViewCard
                customClass={"changeGap"}
                viewName={"SOCCER"}
                viewImg={"/src/assets/image/gymImg3.jpg"}
              />
              <ViewCard
                customClass={"changeGap"}
                viewName={"SOCCER"}
                viewImg={"/src/assets/image/gymImg4.jpg"}
              />
            </div>
          </div>
        </section>
        <section className="manyways-section">
          <div className="contanier">
            <div className="manyways-block">
              <div className="manyways-header">
                <h3 className="manyways-head">SO MANY WAYS TO SHOP</h3>
              </div>
              <div className="manyways-collection-block">
                <div className="manyways-collection">
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/homeImg.jpg"}
                    viewName={"E-GIFT CARD"}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/homeImg2.jpg"}
                    viewName={"EMAIL SIGN-UP"}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/homeImg3.jpg"}
                    viewName={"MOBILE APP"}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/homeImg4.jpg"}
                    viewName={"REFER A FRIEND"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <UserImage />
      </main>
    </>
  );
};
