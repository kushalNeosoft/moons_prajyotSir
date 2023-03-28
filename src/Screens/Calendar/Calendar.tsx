import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [stripeDate, setStripeDate] = useState('');
  const [showEvents, setShowEvents] = useState(false);
  const [showStripeEvents, setStripeShowEvents] = useState(false);
  const [showCalendar, setShowCalendar] = useState(true);
  const currentDate = new Date();
  const maxDate = currentDate.toISOString().split('T')[0];
  const [markedDates, setMarkedDates] = useState({
    '2023-03-25': {marked: true, dotColor: 'red'},
    '2023-03-26': {marked: true, dotColor: 'red'},
    '2023-03-27': {marked: true, dotColor: 'red'},
    '2023-03-28': {marked: true, dotColor: 'red'},
  });
  const events = [
    {id: 1, title: 'Event 1', date: '2023-03-25'},
    {id: 2, title: 'Event 2', date: '2023-03-26'},
    {id: 3, title: 'Event 3', date: '2023-03-27'},
    {id: 3, title: 'Event 4', date: '2023-03-28'},
  ];
  const eventsForDate = events.filter(event => event.date === selectedDate);
  const eventsForStripe = events.filter(event => event.date === stripeDate);
  let markedDatesArray = [
    {
      date: '2023-03-27',
      dots: [
        {
          color: 'red',
        },
      ],
    },
    {
      date: '2023-03-28',
      dots: [
        {
          color: 'red',
        },
      ],
    },
  ];

  const handleDayPress = date => {
    const eventsOnDate = events.filter(event => event.date === date.dateString);
    if (eventsOnDate.length > 0) {
      setSelectedDate(date.dateString);
      setShowEvents(true);
    } else {
      setSelectedDate('');
      setShowEvents(false);
    }
  };

  const handleDateSelected = date => {
    console.log('.....', date);
    const eventsOnDate = events.filter(event => {
      return event.date === date;
    });
    console.log('eventsOnDate', eventsOnDate);
    if (eventsOnDate.length > 0) {
      setStripeDate(date);
      setStripeShowEvents(true);
    } else {
      setStripeDate('');
      setStripeShowEvents(false);
    }
  };
  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        style={styles.botton}
        onPress={() => {
          setShowCalendar(!showCalendar);
          setShowEvents(false);
          setSelectedDate('');
        }}>
        <Text style={styles.bottonText}>Calendar</Text>
      </TouchableOpacity>
      {showCalendar === true ? (
        <Calendar
          style={{borderRadius: 6, elevation: 5, margin: 30}}
          onDayPress={handleDayPress}
          markingType={'period'}
          markedDates={markedDates}
          maxDate={maxDate}
        />
      ) : null}
      {showEvents && showCalendar ? (
        <View style={styles.eventsContainer}>
          <Text style={styles.eventsHeading}>Events for {selectedDate}</Text>
          {eventsForDate.length > 0 ? (
            <FlatList
              data={eventsForDate}
              keyExtractor={event => event.id.toString()}
              renderItem={({item}) => (
                <View style={styles.eventList}>
                  <Text style={styles.eventTitle}>{item.title}</Text>
                </View>
              )}
            />
          ) : null}
        </View>
      ) : null}
      {/* Stripe calendar */}

      <View style={{marginHorizontal: 20, flex: 1}}>
        <CalendarStrip
          style={{backgroundColor: 'white', paddingBottom: 10}}
          dateNumberStyle={{color: 'black'}}
          dateNameStyle={{color: 'black'}}
          calendarHeaderStyle={{color: 'black'}}
          highlightDateNameStyle={{color: 'black'}}
          highlightDateNumberStyle={{color: 'black'}}
          markedDates={markedDatesArray}
          onDateSelected={date => {
            console.log('______', date);
            handleDateSelected(date.format('YYYY-MM-DD'));
            // console.log('Called........', date, date.format('DD-MM-YYYY'));
          }}
        />
        {showStripeEvents === true ? (
          <View style={styles.eventsContainer}>
            <Text style={styles.eventsHeading}>Events for {stripeDate}</Text>
            {eventsForStripe.length > 0 ? (
              <FlatList
                data={eventsForStripe}
                keyExtractor={event => event.id.toString()}
                renderItem={({item}) => (
                  <View style={styles.eventList}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                  </View>
                )}
              />
            ) : null}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  botton: {
    marginTop: 20,
    backgroundColor: '#7a42f4',
    width: '80%',
    alignSelf: 'center',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  bottonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  eventsContainer: {
    marginTop: 5,
    marginHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 6,
    flex: 1,
    marginBottom: 15,
  },
  eventsHeading: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
  eventTitle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
  eventList: {
    marginTop: 5,
    marginHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  item2: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    marginHorizontal: 10,
    marginTop: 17,
    borderRadius: 5,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  itemTime: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
export default CalendarScreen;
