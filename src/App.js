import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { list } from './components/Cards/cards-list';
import Cards from './components/Cards/card_index';
import Filter from './components/Filter/Filter_index';
import Header from './components/Header/Header_index';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileMenu from './components/Header/ProfileMenu';
import Login from './components/Header/Login/Login';

function AppContent() {
  const [selectedFilter, setSelectedFilter] = React.useState(0);
  const [showSearch, setShowSearch] = React.useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleDateChange = (ranges) => {
    // Implement your date change logic here
  };

  const handleSearch = (region, startDate, endDate, guestCounts) => {
    // Example search logic based on region and date range
    // const results = list.filter(
    //   (item) =>
    //     item.region === region &&
    //     new Date(item.date) >= startDate &&
    //     new Date(item.date) <= endDate &&
    //     item.maxGuests >=
    //       guestCounts.adults + guestCounts.children + guestCounts.infants
    // );
    // setSearchResults(results); // Unused variable
  };

  return (
    <div>
      <Header
        toggleSearch={toggleSearch}
        onDateChange={handleDateChange}
        onSearch={handleSearch}
      />
      <ProfileMenu />
      {showSearch && <SearchBar onSearch={handleSearch} />}
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Cards list={list} />
    </div>
  );
}

function App() {
  // const location = useLocation(); // Unused variable

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
