import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import ImagePicker from 'react-native-image-crop-picker';
import {Profilestyle} from './Profile.style';
import {useDispatch, useSelector} from 'react-redux';
import {imgcon} from '../../Redux/Action';
import CustomHeader from '../../Component/Header/CustomHeader';

const Profile: React.FC = () => {
  const {t} = useTranslation();
  const [imagest, setImagest] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const dispatch = useDispatch();
  const storeimg = useSelector(state => state.Login.imgstore);
  useEffect(() => {
    console.log('storeimg', storeimg);
  }, [storeimg]);

  const cameraOpen = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image, 'PPPPPP--->');
      setImagest(image.path);
      console.log(imagest, 'KAKAKAK2222->');

      dispatch(imgcon({imgstore: image.path}));
    });
  };
  // console.log(image,"KAKAKAKAKKAKAKKK=====>>>");

  const galleryOpen = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImagest(image.path);
      dispatch(imgcon({imgstore: image.path}));
    });
  };

  return (
    <View style={Profilestyle.maincon}>
      <View style={{top:0 ,flex:1,position:"absolute"}}>
        <CustomHeader title="My Screen Title" centerComponent={''} />
      </View>
      <View style={Profilestyle.imagcon}>
        <Image
          source={{
            uri: storeimg,
          }}
          style={Profilestyle.imgmain}
        />
      </View>
      <TouchableOpacity onPress={cameraOpen}>
        <View style={Profilestyle.camerabtn}>
          <Text style={Profilestyle.camgaltxt}>Camera</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={galleryOpen}>
        <View style={Profilestyle.camerabtn}>
          <Text style={Profilestyle.camgaltxt}>Gallery</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
