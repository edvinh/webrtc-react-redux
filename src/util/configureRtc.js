import SimpleWebRTC from 'simplewebrtc'
import * as rtcActions from '../actions/rtcActions'

const options = {
  autoRequestMedia: true,
  media: {audio: true, video:false},
  receiveMedia: {
    mandatory: {
      OfferToReceiveVideo: false,
    },
  },
}

const webRtc = new SimpleWebRTC(options)

webRtc.on('readyToCall', () => store.dispatch(rtcActions.readyToCall()))
webRtc.on('localMediaError', err => store.dispatch(rtcActions.panic(err)))
webRtc.on('joinedRoom', () => store.dispatch(rtcActions.roomJoined(webRtc.connection.getSessionid())))
webRtc.on('peerStreamRemoved', () => store.dispatch(rtcActions.peerDisconnected()))
webRtc.on('channelMessage', (peer, label, data) => {
  debugger;
  switch (data.type) {
    case 'peerChangedName':
      return store.dispatch(rtcActions.peerChangedName(peer, data.payload))
    case 'peerConnected':
      return store.dispatch(rtcActions.peerConnected(peer))
    case 'chatMessage':
      return store.dispatch(rtcActions.chatMessage(peer, data.payload))
    case 'raw':
      return store.dispatch(JSON.parse(data.payload))
  }
})

// Hack
let store;
webRtc.setStore = function (s) {
  store = s
}
export default webRtc
