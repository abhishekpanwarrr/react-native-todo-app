import React,{useState,useEffect} from 'react'
import {StyleSheet,ScrollView} from 'react-native'
import {Button, Form,Text,H1,Container,Item, Input} from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
const Edit = ({navigation,route}) => {
    const [name, setName] = useState('')
    const [totalNoSeason, setTotalNoSeason] = useState('')
    const [id,setId] = useState(null)

    const update = async() => {
        try {
            if(!name || !totalNoSeason){
                console.warn('Add fields')
            }
            const seasonToUpdate ={
                id,
                name,
                totalNoSeason,
                isWatched:false
            }

            const storedValue = await AsyncStorage.getItem('@season_list')
            const list = await JSON.parse(storedValue)

            list.map((singleSeason) => {
                if(singleSeason.id ==  id){
                    singleSeason.name = name,
                    singleSeason.totalNoSeason = totalNoSeason
                }
                return singleSeason
            })
             await AsyncStorage.setItem('@season_list', JSON.stringify(list))
             navigation.navigate('Home')

        } catch (error) {
            console.warn(error)
        }
    }
    useEffect(() => {
        const {season} = route.params
        const {id,name,totalNoSeason} =season
        setId(id)
        setName(name)
        setTotalNoSeason(totalNoSeason) 
    }, [])


    return (
        <Container style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <H1 style={styles.heading}>Add To WatchList</H1>
                <Form>
                    <Item rounded style={styles.fontItem}>
                        <Input placeholder='Season name' style={{color:'#eee',paddingLeft:25}} value={name} onChangeText={(text) => setName(text)} />
                    </Item>
                    <Item rounded style={styles.fontItem}>
                        <Input placeholder='No of seasons' style={{color:'#eee',paddingLeft:25}} value={totalNoSeason} onChangeText={(text) => setTotalNoSeason(text)}/>
                    </Item>
                    <Button block rounded onPress={update} style={{marginVertical:20}}><Text style={{color:'#eee'}} >Update</Text></Button>
                </Form>
            </ScrollView>
        </Container>
    )
}

export default Edit


const styles = StyleSheet.create({
    emptyContainer:{
      backgroundColor:'#1b262c',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    container:{
      backgroundColor:'#1b262c',
      flex:1,
    },
    heading:{
      textAlign:'center',
      color:'#00b7c2',
      marginVertical:15,
      marginHorizontal:5
    },
    actionButton:{
      marginLeft:5
    },
    seasonName:{
      color:'#fdcb9e',
      textAlign:'justify',
      textTransform:'capitalize'
    },
    listItem:{
      marginLeft:0,
      marginBottom:20
    }
 })
