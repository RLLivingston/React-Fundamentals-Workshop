import {observable } from 'mobx';
import IObservableCartStore from './IObservableCartStore';
import ITitle from '../../Components/Title/ITitle';

class ObservableCartStore implements IObservableCartStore {
    @observable cartTitles: ITitle[] = [];
}

const observableCartStore = new ObservableCartStore();

export default observableCartStore;