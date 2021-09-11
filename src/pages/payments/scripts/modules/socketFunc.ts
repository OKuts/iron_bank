import io from 'socket.io-client';
import toastr from 'toastr';
import { userStore } from '../../../scripts/userStore/userStore';
import { changeShowBalance } from './changeShowBalance';

export const socketFunc = () => {
    const socket = io('https://lab.lectrum.io', {
        path: '/ws',
    });

    socket.on('connect', () => {
        console.log('connected');
    });

    socket.on('disconnect', () => {
        console.log('disconnect');
    });

    socket.emit('login', `ironbank:${userStore.getUser().email}`);

    socket.on('login', (data) => {
        console.log(data);
    });

    socket.on('notification', (source) => {
        const data = JSON.parse(source);
        changeShowBalance();
        toastr.success(data.title, 'Успешно');
    });

    socket.on('order', (data) => {
        // console.log(JSON.parse(data));
        changeShowBalance();
        toastr.success(data.description, 'Успешно');
    });
};
