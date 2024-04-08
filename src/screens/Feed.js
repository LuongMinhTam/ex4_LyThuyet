import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

function Feed() {
    const [isHungry, setIsHunrry] = useState(true);

    const renderHunrry = (isHungry) => {
        if(isHungry) {
            return(
                <View>
                    <Text>I'm hunrry!!! I need to eat.</Text>
                </View>
            )
        } else {
            return(
                <View>
                    <Text>I'm feed but i still need to eat!!!</Text>
                </View>
            )
        }
    }

  return (
    <View>
        {renderHunrry(isHungry)}
        <TouchableOpacity style={{width: 100}} onPress={() => setIsHunrry(false)}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Feed</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Feed