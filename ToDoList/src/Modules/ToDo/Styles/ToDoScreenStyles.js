import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming/Colors';
import { Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    container: {
        flex: 1,
        backgroundColor: Colors[colorNames.todo.background],
        paddingBottom: Metrics.width * 0.07,
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'transparent',
        width: Metrics.width * 0.18,
        height: Metrics.width * 0.18,
        flexDirection: 'column',
        marginTop: Metrics.width * 1.525,
        marginLeft: Metrics.width * 0.82,

    },
    iconContainer: {
        width: Metrics.width * 0.146,
        height: Metrics.width * 0.146,
        aspectRatio: 1,
    },
    icon: {
        color: Colors[colorNames.todo.addButton],
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 50,
        width: Metrics.width * 0.09,
        height: Metrics.width * 0.09,
    },
    iconCon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: 60,
    },
    
    // DummyData

    todoBoxContainer: {
        flex: 1,
        backgroundColor: Colors[colorNames.todo.background],

    },
    flatListContainer: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    todoBox: {
        flex: 0.4,
        backgroundColor: Colors[colorNames.todo.background],
        borderColor: Colors[colorNames.todo.addButton],
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: Metrics.width * 0.05,
        marginVertical: Metrics.width * 0.02,
        alignItems: "center",
        padding: 15,
        flexDirection: 'row',
    },
    checkIconContainer: {
        width: Metrics.width * 0.055,
        height: Metrics.width * 0.055,
        aspectRatio: 1,
        position: 'relative',
    },
    checkIcon: {
        color: 'grey',
        alignItems: 'baseline',
        borderRadius: 50,
        

    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10,
    },
    messageText: {
        width: Metrics.width * 0.58,
        height: Metrics.width * 0.14,
        color: Colors[colorNames.todo.todoBoxText],

    },
});
