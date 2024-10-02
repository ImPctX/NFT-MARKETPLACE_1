import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={200}
            height={200}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Explore Socially Responsible NFT Collections</h3>
          <p>
            ImpactX’s NFT Marketplace offers a wide range of collections that
            support public good projects. From Women Empowerment to Sea
            Cleaning, each collection is tied to a socially responsible cause.
            These NFTs are not just digital art; they are tokens of your
            contribution to meaningful initiatives around the world.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={200}
            height={200}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Buy or Mint NFTs That Support Social Causes</h3>
          <p>
            Once you’ve discovered the collections that resonate with you, the
            next step is to either buy existing NFTs or mint new ones. A portion
            of every sale or minting fee is automatically directed to NGOs or
            non-profit partners, ensuring that your purchase supports vital
            projects like tree plantations, animal welfare, or cultural heritage
            preservation.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={200}
            height={200}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>CoTrade NFTs and Earn While Making an Impact</h3>
          <p>
            The NFT Marketplace allows you to trade NFTs with other users,
            offering a way to earn money while making a positive difference. As
            the demand for NFTs that support social causes grows, you can sell
            your NFTs for profit while continuing to fund public good
            initiatives. Through a revenue-sharing model, a portion of every
            trade supports partnered NGOs.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Filter & Discover"
            width={200}
            height={200}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Earn Additional Rewards and Showcase Your Support</h3>
          <p>
            As you continue to buy, sell, and trade NFTs, you can also earn
            additional rewards such as exclusive NFTs or cryptocurrency. Each
            NFT you collect becomes a digital representation of your
            contributions to social good. You can display your NFTs as badges of
            honor, showcasing your support for causes like mental health
            advocacy, youth empowerment, and environmental conservation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
