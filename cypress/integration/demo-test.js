/// <reference types="cypress" />


//importing and implementing pages
import { HomePage } from "../pages/home-page";
import { WomenCategory } from "../pages/women-category";
import { ItemPage } from "../pages/item-page";
import { CartPage } from "../pages/cart-page"

const homePage = new HomePage;
const womenCat = new WomenCategory;
const itemPage = new ItemPage;
const cartPage = new CartPage;


//declaring variables 
const pageUrl = 'http://automationpractice.com/index.php'; // shop url
const itemCategory = 'Women'; // category choosed from menu (Women/Dresses/T-Shirt)
const itemName = 'Printed Chiffon Dress'; // name of discounted item
const productQuantityStr = '1'; //how many products should be in the cart
const checkout = true; //checkout after adding one item to the cart
const accountMail = 'qaz@example.com';
const accountPass = 'qwert12345';
const oldPrice = 20.50; //price before discount
const disc = 0.2; //min 0, max 1


//math and types conversion
const newPrice = oldPrice * (1 - disc);
const oldPriceStr = oldPrice.toString();
const newPriceStr = newPrice.toFixed(2).toString();
const dsicPercent = disc * 100;


describe('TC01:  Validating discount implementation - ordering discounted product', () => {

    it('Checks if new price is the same in every step of ordering the discounted product.', () => {
        homePage.navigate(pageUrl); //visiting website
        homePage.chooseFromMenu(itemCategory); //choosing category from menu
        womenCat.chooseItem(itemName); //choosing item from category
        itemPage.checkDicount(dsicPercent, oldPriceStr, newPriceStr); //checking if dsicount and prices are equal to assumed values
        itemPage.addToCart(checkout); //adding to cart, navigating to checkout when checkout == true
        cartPage.checkProducts(productQuantityStr); //checking if products qantity in cart is equal to assumed qantity
        cartPage.checkTotalProductPrice(newPriceStr); //checking if total product price is equal to discounted price
        cartPage.nextStep(); // going to next step of checkout
        cartPage.signIn(accountMail, accountPass); //signing in using email and password from variables
        cartPage.nextStep();
        cartPage.tickTos(); //ticking (.check();) checkbox terms of service
        cartPage.nextStep();
        cartPage.checkTotalProductPrice(newPriceStr);
    });

});