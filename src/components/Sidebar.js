import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import MovieIcon from '@material-ui/icons/Movie';
import VideoLibraryIcon1 from '@material-ui/icons/VideoLibrary';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsIcon from '@material-ui/icons/Sports';
import DuoIcon from '@material-ui/icons/Duo';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import HistoryIcon from '@material-ui/icons/History';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  //Early Return pattern
  if(!isMenuOpen){
    return null;
  }
  return (
      <>
    <div className="p-5 shadow-lg w-48 ">
      <ul className='font-bold'>
       
       <li><Link to="/"> <HomeIcon className='mb-2'/> Home</Link></li>
        <li><DuoIcon className='mb-2'/>Shorts</li>
        <li><VideoLibraryIcon className='mb-2'/>Videos</li>
        <li><WifiTetheringIcon className='mb-2'/>Live</li>
      </ul>
      <h1 className='font-bold pt-5'><SubscriptionsIcon className='mb-2'/>Subscription</h1>
      <ul className='p-2'>
        <li>👧Pihu</li>
        <li>👩‍🦳Zishu</li>
        <li>👤Gituar</li>
        <li>👨‍💻Arsh Goyal</li>
        <li>{"___________________"}</li>
      </ul>
      <h1 className='font-bold pt-5'><QueryBuilderIcon className='mb-2'/>Watch Later</h1>
      <ul className='p-2'>
        <li><MusicNoteIcon className='mb-2'/> Music</li>
        <li><SportsIcon className='mb-2'/>Sports</li>
        <li><MovieIcon className='mb-2'/>Movies</li>
        <li><SportsEsportsIcon className='mb-2'/>Gaming</li>
      </ul>      
      <h1 className='font-bold pt-2'><VideoLibraryIcon1 className='mb-2'/>Library</h1>
      <h1 className='font-bold pt-2'><HistoryIcon className='mb-2'/>History</h1>
      <h1 className='font-bold pt-2'><PlayCircleFilledIcon className='mb-2'/>Your Videos</h1>
      <h1 className='font-bold pt-2'><ArrowDownwardIcon className='mb-2'/>Download</h1>
      <h1 className='font-bold pt-2'><ThumbUpIcon className='mb-2'/>Liked Videos</h1>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul className='p-2'>
        <li><MusicNoteIcon className='mb-2'/>Music</li>
        <li><MovieIcon className='mb-2'/>Film</li>
        <li><LocalLibraryIcon className='mb-2'/>News</li>
        <li><ShoppingBasketIcon className='mb-2'/>Shopping</li>
        <li><SportsIcon className='mb-2'/>Sports</li>
        <li><MovieIcon className='mb-2'/>Movies</li>
        <li><SportsEsportsIcon className='mb-2'/>Gaming</li>
        <li><WbIncandescentIcon className='mb-2'/>Learning</li>
        <li><WifiTetheringIcon className='mb-2'/>live</li>
      </ul>    
      <h1 className='font-bold pt-2'><SettingsIcon className='mb-2'/>Settings</h1>
      <h1 className='font-bold pt-2'><HelpOutlineIcon className='mb-2'/>Help</h1>
    
    </div>
    </>
  )

}

export default Sidebar
