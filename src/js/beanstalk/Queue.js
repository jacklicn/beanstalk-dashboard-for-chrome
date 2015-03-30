import nodestalker from 'nodestalker';

class Queue {

    constructor (connection) {
        this.client = nodestalker.Client(connection);
    }

    list_tubes () {
        return new Promise((resolve, reject) => {
            this.client.list_tubes().onSuccess((data) => {
                resolve(data)
            }, (data) => {
                reject(data)
            });
        });
    }

    stats_tube (tube) {
        return new Promise((resolve, reject) => {
            this.client.stats_tube(tube).onSuccess((data) => {
                resolve(data)
            }, (data) => {
                reject(data)
            });
        });
    }

    ignore (tube) {
        return new Promise((resolve, reject) => {
            this.client.ignore(tube).onSuccess((data) => {
                resolve(data)
            }, (data) => {
                reject(data)
            });
        });
    }

    watch (tube) {
        return new Promise((resolve, reject) => {
            this.client.watch(tube).onSuccess((data) => {
                resolve(data)
            }, (data) => {
                reject(data)
            });
        });
    }

    reserve () {
        return new Promise((resolve, reject) => {
            this.client.reserve().onSuccess((job) => {
                resolve(job);
            });
        });
    }

    release (id, priority, delay) {
        return new Promise((resolve, reject) => {
            this.client.release(id, priority, delay).onSuccess((job) => {
                resolve(job);
            });
        });
    }

    deleteJob (id) {
        return new Promise((resolve, reject) => {
            this.client.deleteJob(id).onEnd((data) => {
                resolve()
            }, (data) => {
                reject(data)
            });
        });
    }

    bury (id) {
        return new Promise((resolve, reject) => {
            this.client.bury(id).onSuccess((job) => {
                resolve();
            });
        });
    }

    use (tube) {
        return new Promise((resolve, reject) => {
            this.client.use(tube).onEnd((data) => {
                resolve()
            }, (data) => {
                reject(data)
            });
        });
    }

    put (data, priority, delay, ttr) {
        return new Promise((resolve, reject) => {
            this.client.put(data, priority, delay, ttr).onEnd((data) => {
                resolve()
            }, (data) => {
                reject(data)
            });
        });
    }

    disconnect () {
        return new Promise((resolve, reject) => {
            this.client.disconnect();
            resolve();
        });
    }
}

export default Queue;