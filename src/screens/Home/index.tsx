import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {

    const participants = ['Christian', 'Vini', 'Diego', 'Rodrigo', 'Pedro', 'Gustavo', 'Mario', 'Cesar', 'Julia', 'Priscila', 'Magada']

    function handleParticipantAdd() {
        if (participants.includes("Rodrigo")) {
            return Alert.alert("Participante existe", "Ja existe um participate na lista com esse nome")
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o participate ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome de Evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda ? Adicione participantes a sua lista.
                    </Text>
                )}
            />
        </View>
    )
}