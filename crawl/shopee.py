import pandas as pd 
import numpy as np
import requests
import json
import random
import time
from time import sleep
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By

# pip install requests#cmd
# pip install selenium
# pip install pandas
def Get_List_ID():
    #Get list link of items
    print('-----Start crawl page-----')
    drivers.get('https://shopee.vn/flash_sale?fromItem=7246014509&promotionId=140751457681409')
    sleep(random.randint(8,10))
    try:
        elems=drivers.find_elements(By.CSS_SELECTOR,'.col-xs-2-4.shopee-search-item-result__item [href]')
    
    except NoSuchElementException as e:
        print(e)
    for elem in elems:
        link=elem.get_attribute('href')
        link_list.append(link)

def Get_Product_Information():
    for link in link_list:
        payload={
        }
        headers = {
        'authority': 'shopee.vn',
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        # 'x-csrftoken': 'ILmX6HW9LSoEqlit1yxFHzK9tUhLEPGM',
        'x-kl-ajax-request': 'Ajax_Request',
        'x-requested-with': 'XMLHttpRequest',
        'x-shopee-language': 'vi'
        }

        master_=[]
        #Retrieve productID and sellerID from link
        temp1=link.split('?')
        temp2=temp1[0].split('i.')
        temp=temp2[1].split('.')
        shopId=temp[0] #ShopID
        itemId=temp[1] #ProductID

        #Get data from item url
        item_url = f"https://shopee.vn/api/v4/item/get?itemid={itemId}&shopid={shopId}"
        response = requests.get(item_url, headers=headers, data=payload)
        item_raw=response.json()
        product_data=item_raw['data']
        
        #Get product information
        
        title=product_data['name'] #Title
        
        #Category
        category=''
        for cat in product_data['fe_categories']:
            category=category+cat['display_name']+' > '
            category=category[0:-2]

        #Location
        location=product_data['shop_location']
        
        #Brand
        brand_name=product_data['brand']
        
        master_.append(itemId)
        master_.append(title)
        master_.append(category)
        master_.append(brand_name)
        master_.append(location)
        master_.append(shopId)
        Master_Product.append(master_)
        
        #Get model information
        for model in product_data['models']:
            model_=[]
            modelId=model['modelid'] #Get modelId
            modelName=model['name'] #Get modelName
            inStock=model['stock'] #Get inStock
            price=model['price'] #Get price
        
        #Get isActive
        if inStock!=0:
            isActive=1
        else:
            isActive=0
        
        model_.append(itemId)
        model_.append(modelId)
        model_.append(modelName)
        model_.append(inStock)
        model_.append(price)
        model_.append(isActive)
        Product_Details.append(model_)
        
        #Get marketing information
        marketing_=[]
        ratingStar=product_data['item_rating']['rating_star'] #Rating star
        soldItems=product_data['historical_sold'] #Sold items
        countReviews=product_data['cmt_count'] #Count reviews
        
        marketing_.append(itemId)
        marketing_.append(ratingStar)
        marketing_.append(countReviews)
        marketing_.append(soldItems)
        Marketing.append(marketing_)
        
        #Get seller information
        shop_url = f"https://shopee.vn/api/v4/shop/get_shop_base?entry_point=ShopByPDP&need_cancel_rate=true&request_source=shop_home_page&shopid={shopId}&version=1"
        response2 = requests.get(shop_url, headers=headers, data=payload)
        shop_raw=response2.json()
        shop_data=shop_raw['data']
        
        seller_=[]
        shopName=shop_data['name'] #Shop name
        itemCount=shop_data['item_count']
        ratStar=shop_data['rating_star']
        resRate=shop_data['response_rate']
        followers=shop_data['follower_count']
        try:
            cancelRate=shop_data['seller_metrics']['cancellation_rate']
        except Exception as e:
            cancelRate=0
        
        seller_.append(shopId)
        seller_.append(shopName)
        seller_.append(itemCount)
        seller_.append(ratStar)
        seller_.append(resRate)
        seller_.append(cancelRate)
        seller_.append(followers)
        Seller.append(seller_)

def Create_DataFrame():
    
    df_MasterProduct=pd.DataFrame(data=Master_Product,columns=['Item ID','Title','Category','Brand','Location','Shop ID'])
    df_Marketing=pd.DataFrame(data=Marketing,columns=['Item ID','Rating star','Count reviews','Sold items'])
    df_ProductDetail=pd.DataFrame(data=Product_Details,columns=['Item ID','Model ID','Model name','In stock','Price','Is active'])
    df_Seller=pd.DataFrame(data=Seller,columns=['Shop ID','Shop name','Item count','Rating star','Response rate','Cancel rate','Follower count'])
    
    Clean_Master_Product(df_MasterProduct)
    Clean_Product_Details(df_ProductDetail)
    Clean_Marketing(df_Marketing)
    Clean_Seller(df_Seller)
    
    # Dataframe to Excel 
    df_MasterProduct.to_excel('Master Product.xlsx')
    df_ProductDetail.to_excel('Product Detail.xlsx')
    df_Marketing.to_excel('Marketing.xlsx')
    print('-------Insert data to excel file successfully-------')
    
def Clean_Product_Details(df):
    df['Item ID']=df['Item ID'].astype(np.int64)
    df['Model ID']=df['Model ID'].astype(np.int64)
    
    
def Clean_Marketing(df):
    pass

def Clean_Master_Product(df):
    df['Item ID']=df['Item ID'].astype(np.int64)
    df['Shop ID']=df['Shop ID'].astype(np.int64)

def Clean_Seller(df):
    df['Shop ID']=df['Shop ID'].astype(np.int64)

if __name__ == "__main__":
    
    start_time=time.perf_counter()
    
    drivers=[]
    urls=[]
    temp_url=f'https://shopee.vn/search?category=11036030&keyword=%C4%91i%E1%BB%87n%20tho%E1%BA%A1i%20di%20%C4%91%E1%BB%99ng&page=1'
        
    link_list=[]
    Master_Product=list()
    Product_Details=list()
    Marketing=list()
    Seller=list()
    Get_List_ID()
    Get_Product_Information()
    end_time=time.perf_counter()
    print(f'Executive time {end_time-start_time}')
