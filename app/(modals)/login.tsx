import { Link, useRouter } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StyleGlobal } from './../../constants/StyleAll';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';

import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
enum Stragy {
  Google = 'oauth_google',
  Facebook = 'oauth_facebook',
}
WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  useWarmUpBrowser();
  const router = useRouter();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  //   const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' });
  //   const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  //   const { startOAuthFlow: facebookAuth } = useOAuth({
  //     strategy: 'oauth_facebook',
  //   });

  //   const onSelectAuth = async (strategy: Stragy) => {
  //     const selectAuth = {
  //       [Stragy.Google]: googleAuth,
  //       [Stragy.Facebook]: facebookAuth,
  //     }[strategy];

  //     try {
  //       console.log('try');

  //       const data = await googleAuth();
  //       console.log('data', data);

  //       const { createdSessionId, setActive } = await selectAuth();
  //       console.log('createdSessionId', createdSessionId);
  //       if (createdSessionId) {
  //         await setActive!({ session: createdSessionId });
  //         router.back();
  //       }
  //     } catch (err) {
  //       console.log('catch');
  //       console.log(err);
  //     }

  //   };
  const googleAuthSignUp = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      console.log('createdSessionId', createdSessionId);

      if (createdSessionId) {
        await setActive!({ session: createdSessionId });
        // router.back();
      }
    } catch (error) {
      console.error('OAuth error', error);
    }
  };

  return (
    <View style={styles.outerContainer}>
      {/* <Link href={'/(modals)/login'}>Login</Link> */}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={[StyleGlobal.inputField, { marginBottom: 10 }]}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        style={[StyleGlobal.inputField, { marginBottom: 20 }]}
      />
      <TouchableOpacity style={StyleGlobal.btn}>
        <Text style={StyleGlobal.btnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.separatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
        <Text style={{ margin: 5 }}>Or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity
          style={styles.btnOutline}
          //   onPress={() => onSelectAuth(Stragy.Google)}
          onPress={() => googleAuthSignUp()}
        >
          <MaterialCommunityIcons
            name="gmail"
            size={24}
            color="black"
            style={[StyleGlobal.btnIcon, { marginBottom: 10 }]}
          />
          <Text style={styles.btnText}>Continue with Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnOutline}
          //   onPress={() => onSelectAuth(Stragy.Facebook)}
        >
          <Entypo
            name="facebook-with-circle"
            size={24}
            color="black"
            style={[StyleGlobal.btnIcon, { marginBottom: 10 }]}
          />
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },
  separatorView: {
    flexDirection: 'row',
    fontFamily: 'MonoBold',
    color: Colors.grey,
    alignItems: 'center',
    marginVertical: 30,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnText: { color: '#000', fontSize: 16, fontFamily: 'MonoRegular' },
});

export default Login;
// https://github.com/clerk/clerk-expo-starter/issues/19
