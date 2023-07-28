import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import {newsData, newsListData} from './SampleData';
import NewsComponent from '../Component/NewsComponent';
import NewsListComponent from '../Component/NewsListComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {marketScreen} from '../../../theme/light';
import {useEffect, useState} from 'react';
import Office from '../../BackOffice/Office';
import ViewAll from '../ViewAll';
import HotPursuitDialog from '../ViewAllComponents/HotPursuitDialog';
import HotPersuitSearchDialog from '../ViewAllComponents/HotPersuitSearchDialog';
const NewsAndAnnouncement = () => {
  const [newsCard, setNewsCard] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [hotPersuitSearchModal, setHotPersuitSearchModal] = useState(false);
  const navigation = useNavigation();

  
  const renderNewsItem = ({item}: any) => {
    return (
      <NewsComponent
        title={item?.Heading}
        subTitle={item.Caption}
        onPress={() => {
          setDialog(true);
        }}
      />
    );
  };
  const renderNewsListItem = ({item}: any) => {
    return (
      <NewsListComponent
        title={item.Heading}
        stockName={item.ScripData_NSE.Symbol}
        price={'123.20'}
        change={'-2.05 (-17%)'}
        time={item.Time}
        clickLeft={() => {
          setDialog(true);
        }}
      />
    );
  };

  const loadNewsCard = async () => {
    const headers = new Headers();
      headers.append('jTenantToken', '1');
      headers.append('jTenantid', '1404');
    fetch(
      'https://pre-prod1.odinwave.com/cds/1404/v1/NSE_EQ/2885/5/GetScripWiseNewsData',
      {
        method: 'GET',
        headers: headers,
      },
    )
      .then(response => response.json())
      .then((data): any => {
        if (data.ResponseObject.type === 'success') {
          setNewsCard(data.ResponseObject.resultset);
        }
      })
      .catch(error => console.log('error', error));
  };

  const loadNewsList = async () => {
    const headers = new Headers();
      headers.append('jTenantToken', '1');
      headers.append('jTenantid', '1404');
    fetch('https://pre-prod1.odinwave.com/cds/1404/v1/10/GetHotPursuitData', {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        return response.json();
      })
      .then((data): any => {
        if (data.ResponseObject.type === 'success') {
          setNewsList(data.ResponseObject.resultset);
        }
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    loadNewsCard();
    loadNewsList();
  }, []);

  return (
    <View>
      <View style={marketScreen.newsAndAnnounceHeadView}>
        <Text style={marketScreen.newAndAnnounceHeadText}>
          News & Announcements
        </Text>
        <TouchableOpacity
         onPress={() => {
          setHotPersuitSearchModal(true);
        }}>
          <MaterialIcons
            name="search"
            size={24}
            color={'black'}
            style={marketScreen.newAndAnnounceSearchBtn}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={newsCard}
        renderItem={renderNewsItem}
        horizontal={true}
        keyExtractor={(_, index) => `item-${index}`}
        ListFooterComponent={() => {
          return (
            <View style={marketScreen.newAndAnnounceFlatListFooter}></View>
          );
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={marketScreen.newAndAnnounceFlatlist}
      />
      <View style={marketScreen.newAndAnnounceBottomListView}>
        <FlatList
          data={newsList?.slice(0, 4)}
          renderItem={renderNewsListItem}
          keyExtractor={(_, index) => `item-${index}`}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <HotPursuitDialog
        onClose={() => {
          setDialog(false);
        }}
        visible={dialog}
      />
      <HotPersuitSearchDialog
        visible={hotPersuitSearchModal}
        onClose={() => {
          setHotPersuitSearchModal(false);
        }}
      />
      </View>
        
          <TouchableOpacity
            onPress={() => {
               navigation.navigate('ViewAll');
              
            }}>
            <Text style={marketScreen.viewAllNews}>
              View All News & Announcements
            </Text>
          </TouchableOpacity>
        </View>
      
    
  );
};
export default NewsAndAnnouncement;
