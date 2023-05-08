import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GuidePage = ({navigation}) => {
  const [showDonor, setShowDonor] = useState(false);
  const [showRecipient, setShowRecipient] = useState(false);
  const [showGeneral, setShowGeneral] = useState(false);
  const [showWhen, setShowWhen] = useState(false);
  const [showBefore, setShowBefore] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);

  const toggleDonor = () => {
    setShowDonor(!showDonor);
  };
  const toggleRecipient = () => {
    setShowRecipient(!showRecipient);
  };
  const toggleGeneral = () => {
    setShowGeneral(!showGeneral);
  };
  const toggleWhen = () => {
    setShowWhen(!showWhen);
  };

  const toggleBefore = () => {
    setShowBefore(!showBefore);
  };

  const toggleAfter = () => {
    setShowAfter(!showAfter);
  };
  const toggleDoctor = () => {
    setShowDoctor(!showDoctor);
  };

  return (
    <ScrollView>
    <View style={styles.wrapper}>
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Index')}>
          <Ionicons name="arrow-back" size={34} color="white" />
    </TouchableOpacity>
      <Text style={styles.title}>GUIDE</Text>
      <View style={styles.guide}>
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleDonor}>
          <Text style={styles.sectionHeaderTitle}>Donor's Guide</Text>
          <Ionicons
              name={showDonor ? 'caret-up-circle-outline' : 'caret-down-circle-outline'}
            size={24}
            color="#da3e56"
           />
        </TouchableOpacity>
        {showDonor && (
          <View style={styles.subGuide}>
            <View style={styles.container}>
            <Text style={styles.textheader}>Tips for Blood Donation</Text>
            <TouchableOpacity style={styles.sectionHeader} onPress={toggleWhen}>
              <Text style={styles.sectionHeaderText}>Key things to remember</Text>
              <Ionicons
                name={showWhen ? 'ios-arrow-up' : 'ios-arrow-down'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {showWhen && (
              <View style={styles.sectionContent}>
                <Text style={styles.text}>
                    <Text style={styles.subtext}>* </Text> The minimum age for donation is 17 years.{'\n'}
      
                    <Text style={styles.subtext}>* </Text> There is no upper age imit for regular donors, although they are subject to annual health review after their 66th birthday.{'\n'}
      
                    <Text style={styles.subtext}>* </Text>The upper age limit for first-time donors is 65 years. {'\n'}
      
                    <Text style={styles.subtext}>* </Text>The minimum body weight for blood donation is 50 kg.{'\n'}
      
                    <Text style={styles.subtext}>* </Text>The normal interval between whole blood donations is 16 weeks (minimum 12 weeks) but no more than three donations a year.  {'\n'}
      
                    <Text style={styles.subtext}>* </Text> Please inform doctor or whoever is taking your blood about your last donation date.{'\n\n'}
      
      </Text>
              </View>
            )}
            <TouchableOpacity style={styles.sectionHeader} onPress={toggleBefore}>
              <Text style={styles.sectionHeaderText}>Before Your Donation</Text>
              <Ionicons
                name={showBefore ? 'ios-arrow-up' : 'ios-arrow-down'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {showBefore && (
              <View style={styles.sectionContent}>
                      <Text style={styles.text}>Here are some common precautions to be taken before blood donation:{'\n'}
      
                      <Text style={styles.subtext}>• </Text> Maintain a healthy, well-balanced diet. Please do not donate if you are in a period of fasting or have any serious health issue.{'\n'}
      
                      <Text style={styles.subtext}>• </Text> Get a good night's sleep. Drink plenty of water or nonalcoholic fluids before the donation. {'\n'}
      
                      <Text style={styles.subtext}>• </Text>Eat a healthy meal before your donation. Avoid fatty or fast foods, Such as hamburgers, fries or ice cream before donating. (Fatty foods can affect the tests done on your blood. If there is too much fat in your blood, your donation cannot be tested for infectious diseases and the blood will not be used for transfusion.) {'\n'}
      
                      <Text style={styles.subtext}>• </Text>If you are a platelet donor, remember that your body must be free of aspirin for two days prior to donation.{'\n'}
      
                      <Text style={styles.subtext}>• </Text>Remember to carry any of your valid photo ID card when you go for donation. {'\n'}
      
                      <Text style={styles.subtext}>• </Text>Discuss with doctor about any of your additional health information that you want to share before blood donation.{'\n'}
      
            </Text>
              </View>
            )}
            <TouchableOpacity style={styles.sectionHeader} onPress={toggleAfter}>
              <Text style={styles.sectionHeaderText}>During Your Donation</Text>
              <Ionicons
                name={showAfter ? 'ios-arrow-up' : 'ios-arrow-down'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {showAfter && (
              <View style={styles.sectionContent}>
                <Text style={styles.text}>After a blood test, there are a few precautions that should be taken to avoid any complications or infections.{'\n'} Here are some general precautions:{'\n'}
      
                <Text style={styles.subtext}>• </Text>Put on loose and comfortable clothing. Wear clothing with sleeves that can be raised above the elbow.{'\n'}
                <Text style={styles.subtext}>• </Text>Let the person taking your blood know if you have a preferred arm and show them any good veins that have been used successfully in the past to draw blood.{'\n'}
                <Text style={styles.subtext}>• </Text>Relax, listen to music, talk to other donors or read during the donation process.{'\n'}
                <Text style={styles.subtext}>• </Text>Take the time to enjoy a snack and a drink in the refreshments area immediately after donating.{'\n'}
      
                </Text>
              </View>
            )}
            <TouchableOpacity style={styles.sectionHeader} onPress={toggleDoctor}>
              <Text style={styles.sectionHeaderText}>After Your Donation</Text>
              <Ionicons
                name={showDoctor ? 'ios-arrow-up' : 'ios-arrow-down'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {showDoctor && (
              <View style={styles.sectionContent}>
                <Text>
                <Text style={styles.subtext}>• </Text>Drink an extra four (8 ounce) glasses of liquids and avoid alcohol over the next 24 hours.{'\n'}
                <Text style={styles.subtext}>• </Text>Remove the wrap bandage (if you had one put on your arm) within the next hour.{'\n'}
                <Text style={styles.subtext}>• </Text>Keep the strip bandage on for the next several hours.{'\n'}
                <Text style={styles.subtext}>• </Text> To avoid a skin rash, clean the area around the strip bandage with soap and water.{'\n'}
                <Text style={styles.subtext}>• </Text>Do not do any heavy lifting or vigorous exercise for the rest of the day.{'\n'}
                <Text style={styles.subtext}>• </Text>If the needle site starts to bleed, apply pressure to it and raise your arm straight up for about 5-10 minutes or until bleeding stops.{'\n'}
                <Text style={styles.subtext}>• </Text>If you experience dizziness or lightheadedness after donation, stop what you are doing and sit down or lie down until you feel better. Avoid performing any activity where fainting may lead to injury for at least 24 hours.{'\n'}
                <Text style={styles.subtext}>• </Text>Consult doctor if you any health problem persists or medical care required.{'\n\n'}
      
                </Text>
              </View>
            )}
            </View>
          </View>
        )}
      </View>
      <View style={styles.guide}>
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleRecipient}>
          <Text style={styles.sectionHeaderTitle}>Recipient's Guide</Text>
          <Ionicons
            name={showRecipient ? 'caret-up-circle-outline' : 'caret-down-circle-outline'}
            size={24}
            color="#da3e56"
          />
        </TouchableOpacity>
        {showRecipient && (
          <View style={styles.container}>
    
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleWhen}>
            <Text style={styles.sectionHeaderText}>When to take a blood test</Text>
            <Ionicons
              name={showWhen ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showWhen && (
            <View style={styles.sectionContent}>
              <Text style={styles.text}>
                  There are a variety of symptoms that may indicate the need for a blood test. Some of the common symptoms include: {'\n'}
                  <Text style={styles.subtext}>• Unexplained Fatigue:</Text> If you are feeling tired all the time, even after getting enough sleep, then it could be a sign of anemia or other conditions that can be detected through a blood test.{'\n'}
  
                  <Text style={styles.subtext}>• Unexplained Weight Loss:</Text> If you have been losing weight without any explanation, then it may be a sign of an underlying health condition. A blood test can help identify the cause.{'\n'}
  
                  <Text style={styles.subtext}>• Persistent Infections:</Text> If you have been getting sick frequently or have a persistent infection that is not responding to treatment, then a blood test may be necessary to determine the underlying cause.{'\n'}
  
                  <Text style={styles.subtext}> • Bruising and Bleeding: </Text>If you are experiencing frequent bruising or unexplained bleeding, then it could be a sign of a blood disorder or other conditions that can be detected through a blood test.{'\n'}
  
                  <Text style={styles.subtext}> • Bruising and Bleeding: </Text> If you are experiencing persistent abdominal pain, then a blood test may be necessary to determine if there are any underlying health conditions.{'\n'}
  
                  <Text style={styles.subtext}>• Skin Rash:</Text> If you have a persistent rash or other skin problems, then a blood test may be needed to identify the cause.{'\n\n'}
  
    It is important to note that these symptoms may not always indicate the need for a blood test, and other factors such as family history and lifestyle may also be considered before deciding to take a blood test. It is best to consult with a healthcare provider for personalized guidance.{'\n'}
    </Text>
            </View>
          )}
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleBefore}>
            <Text style={styles.sectionHeaderText}>Precautions before test</Text>
            <Ionicons
              name={showBefore ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showBefore && (
            <View style={styles.sectionContent}>
                    <Text style={styles.text}>Here are some common precautions to be taken before a blood test:{'\n'}
  
                    <Text style={styles.subtext}>• Fasting:</Text> If your doctor has ordered a fasting blood test, you should avoid eating or drinking anything except water for at least 8-12 hours before the test. This includes food, beverages, and even chewing gum.{'\n'}
  
                    <Text style={styles.subtext}>• Medications:</Text>  Inform your doctor if you are taking any medications, supplements or vitamins as some of them may affect the results of your blood test. Your doctor may advise you to stop taking certain medications before the test.{'\n'}
  
                    <Text style={styles.subtext}>• Hydration:</Text> Drink plenty of water before the test to stay hydrated. This makes it easier for the phlebotomist to draw blood and also helps in obtaining accurate results.{'\n'}
  
                    <Text style={styles.subtext}>• Clothing: </Text> Wear loose-fitting clothes that allow easy access to the veins in your arm. Avoid tight sleeves or sleeves with elastic bands, as they can constrict the flow of blood.{'\n'}
  
                    <Text style={styles.subtext}>• Clothing: </Text>x Get a good night's sleep before the test, as being well-rested can improve the accuracy of the results.{'\n'}
  
                    <Text style={styles.subtext}>• Avoid alcohol and strenuous exercise:</Text>  Avoid consuming alcohol and doing any strenuous exercise 24 hours before the test, as they can affect the results of some blood tests.{'\n'}
  
          It is important to follow any specific instructions given by your doctor before your blood test.{'\n'}
        </Text>
            </View>
          )}
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleAfter}>
            <Text style={styles.sectionHeaderText}>Precautions after test</Text>
            <Ionicons
              name={showAfter ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showAfter && (
            <View style={styles.sectionContent}>
              <Text style={styles.text}>After a blood test, there are a few precautions that should be taken to avoid any complications or infections.{'\n'} Here are some general precautions:{'\n'}
  
              <Text style={styles.subtext}>• </Text>Keep the bandage on your arm for a few hours to prevent bleeding.{'\n'}
              <Text style={styles.subtext}>• </Text>Avoid lifting heavy weights or doing strenuous exercise for a few hours after the test.{'\n'}
              <Text style={styles.subtext}>• </Text>Drink plenty of water to help your body replenish fluids lost during the blood test.{'\n'}
              <Text style={styles.subtext}>• </Text>If you experience any bleeding or swelling, apply a cold compress to the affected area.{'\n'}
              <Text style={styles.subtext}>• </Text>If you experience any unusual symptoms, such as dizziness or fainting, seek medical attention immediately.{'\n'}
              <Text style={styles.subtext}>• </Text>Follow any additional instructions provided by your healthcare provider.{'\n'}
            It is important to note that specific precautions may vary depending on the type of blood test performed and the individual's medical history. Always consult with your healthcare provider for personalized instructions.{'\n'}
            </Text>
            </View>
          )}
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleDoctor}>
            <Text style={styles.sectionHeaderText}>When to consult a doctor</Text>
            <Ionicons
              name={showDoctor ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showDoctor && (
            <View style={styles.sectionContent}>
              <Text>
              <Text style={styles.subtext}>• </Text> It is always a good idea to consult a doctor after a blood test, particularly if the results are outside the normal range or if you are experiencing any symptoms that may be related to the test. However, the urgency of seeking medical attention will depend on the specific results of the blood test and your individual medical history.{'\n\n'}
  
              <Text style={styles.subtext}>• </Text>If the results are significantly outside the normal range, or if they suggest the presence of a serious medical condition, your doctor will likely recommend that you come in for a follow-up appointment as soon as possible. In some cases, they may refer you to a specialist for further testing or treatment.{'\n\n'}
  
              <Text style={styles.subtext}>• </Text>In any case, it is important to follow your doctor's advice and attend any recommended follow-up appointments to ensure that any potential health issues are addressed in a timely and effective manner.{'\n'}
            </Text>
            </View>
          )}
        </View>
        )}
      </View>
      <View style={styles.guide}>
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleGeneral}>
          <Text style={styles.sectionHeaderTitle}>General Guide</Text>
          <Ionicons
            name={showGeneral ?'caret-up-circle-outline' : 'caret-down-circle-outline'}
            size={24}
            color="#da3e56"
          />
        </TouchableOpacity>
        {showGeneral && (
          <View style={styles.container}>
    
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleWhen}>
            <Text style={styles.sectionHeaderText}>General Guide</Text>
            <Ionicons
              name={showWhen ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showWhen && (
            <View style={styles.sectionContent}>
              <Text style={styles.text}>
                  There are a variety of symptoms that may indicate the need for a blood test. Some of the common symptoms include: {'\n'}
                  <Text style={styles.subtext}>• Unexplained Fatigue:</Text> If you are feeling tired all the time, even after getting enough sleep, then it could be a sign of anemia or other conditions that can be detected through a blood test.{'\n'}
  
                  <Text style={styles.subtext}>• Unexplained Weight Loss:</Text> If you have been losing weight without any explanation, then it may be a sign of an underlying health condition. A blood test can help identify the cause.{'\n'}
  
                  <Text style={styles.subtext}>• Persistent Infections:</Text> If you have been getting sick frequently or have a persistent infection that is not responding to treatment, then a blood test may be necessary to determine the underlying cause.{'\n'}
  
                  <Text style={styles.subtext}> • Bruising and Bleeding: </Text>If you are experiencing frequent bruising or unexplained bleeding, then it could be a sign of a blood disorder or other conditions that can be detected through a blood test.{'\n'}
  
                  <Text style={styles.subtext}> • Bruising and Bleeding: </Text> If you are experiencing persistent abdominal pain, then a blood test may be necessary to determine if there are any underlying health conditions.{'\n'}
  
                  <Text style={styles.subtext}>• Skin Rash:</Text> If you have a persistent rash or other skin problems, then a blood test may be needed to identify the cause.{'\n\n'}
  
    It is important to note that these symptoms may not always indicate the need for a blood test, and other factors such as family history and lifestyle may also be considered before deciding to take a blood test. It is best to consult with a healthcare provider for personalized guidance.{'\n'}
    </Text>
            </View>
          )}
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleBefore}>
            <Text style={styles.sectionHeaderText}>Precautions before test</Text>
            <Ionicons
              name={showBefore ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showBefore && (
            <View style={styles.sectionContent}>
                    <Text style={styles.text}>Here are some common precautions to be taken before a blood test:{'\n'}
  
                    <Text style={styles.subtext}>• Fasting:</Text> If your doctor has ordered a fasting blood test, you should avoid eating or drinking anything except water for at least 8-12 hours before the test. This includes food, beverages, and even chewing gum.{'\n'}
  
                    <Text style={styles.subtext}>• Medications:</Text>  Inform your doctor if you are taking any medications, supplements or vitamins as some of them may affect the results of your blood test. Your doctor may advise you to stop taking certain medications before the test.{'\n'}
  
                    <Text style={styles.subtext}>• Hydration:</Text> Drink plenty of water before the test to stay hydrated. This makes it easier for the phlebotomist to draw blood and also helps in obtaining accurate results.{'\n'}
  
                    <Text style={styles.subtext}>• Clothing: </Text> Wear loose-fitting clothes that allow easy access to the veins in your arm. Avoid tight sleeves or sleeves with elastic bands, as they can constrict the flow of blood.{'\n'}
  
                    <Text style={styles.subtext}>• Clothing: </Text>x Get a good night's sleep before the test, as being well-rested can improve the accuracy of the results.{'\n'}
  
                    <Text style={styles.subtext}>• Avoid alcohol and strenuous exercise:</Text>  Avoid consuming alcohol and doing any strenuous exercise 24 hours before the test, as they can affect the results of some blood tests.{'\n'}
  
          It is important to follow any specific instructions given by your doctor before your blood test.{'\n'}
        </Text>
            </View>
          )}
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleAfter}>
            <Text style={styles.sectionHeaderText}>Precautions after test</Text>
            <Ionicons
              name={showAfter ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showAfter && (
            <View style={styles.sectionContent}>
              <Text style={styles.text}>After a blood test, there are a few precautions that should be taken to avoid any complications or infections.{'\n'} Here are some general precautions:{'\n'}
  
              <Text style={styles.subtext}>• </Text>Keep the bandage on your arm for a few hours to prevent bleeding.{'\n'}
              <Text style={styles.subtext}>• </Text>Avoid lifting heavy weights or doing strenuous exercise for a few hours after the test.{'\n'}
              <Text style={styles.subtext}>• </Text>Drink plenty of water to help your body replenish fluids lost during the blood test.{'\n'}
              <Text style={styles.subtext}>• </Text>If you experience any bleeding or swelling, apply a cold compress to the affected area.{'\n'}
              <Text style={styles.subtext}>• </Text>If you experience any unusual symptoms, such as dizziness or fainting, seek medical attention immediately.{'\n'}
              <Text style={styles.subtext}>• </Text>Follow any additional instructions provided by your healthcare provider.{'\n'}
            It is important to note that specific precautions may vary depending on the type of blood test performed and the individual's medical history. Always consult with your healthcare provider for personalized instructions.{'\n'}
            </Text>
            </View>
          )}
          <TouchableOpacity style={styles.sectionHeader} onPress={toggleDoctor}>
            <Text style={styles.sectionHeaderText}>When to consult a doctor</Text>
            <Ionicons
              name={showDoctor ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {showDoctor && (
            <View style={styles.sectionContent}>
              <Text>
              <Text style={styles.subtext}>• </Text> It is always a good idea to consult a doctor after a blood test, particularly if the results are outside the normal range or if you are experiencing any symptoms that may be related to the test. However, the urgency of seeking medical attention will depend on the specific results of the blood test and your individual medical history.{'\n\n'}
  
              <Text style={styles.subtext}>• </Text>If the results are significantly outside the normal range, or if they suggest the presence of a serious medical condition, your doctor will likely recommend that you come in for a follow-up appointment as soon as possible. In some cases, they may refer you to a specialist for further testing or treatment.{'\n\n'}
  
              <Text style={styles.subtext}>• </Text>In any case, it is important to follow your doctor's advice and attend any recommended follow-up appointments to ensure that any potential health issues are addressed in a timely and effective manner.{'\n'}
            </Text>
            </View>
          )}
        </View>
        )}
      </View>
    </View> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#da3e56',
    paddingVertical:'10%',
    paddingBottom:'70%',
  },
  box:{
    paddingLeft:15,
  },
  title:{
    textAlign:'center',
    fontWeight:800,
    fontSize:30,
    color:'white',
    backgroundColor:'#da3e56',
    paddingBottom:'10%',
  },
  
  container: {
    backgroundColor:'#da3e56',
    flex: 1,
    padding: 16,
    alignItems:'center',
    justifyContent:'flex-start',
    
  },
  sectionHeader: {
    width:370,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 8,
    borderRadius: 4,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#da3e56',
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContent: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 15,
    marginBottom:10,
  },
  subtext:{
    fontWeight:'bold',
  },
  textheader:{
    color:'white',
    fontWeight:800,
    fontSize:22,
    marginBottom:25,
  },
  


});

export default GuidePage;
