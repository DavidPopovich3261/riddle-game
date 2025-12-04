
export function measureSolveTime(func) {
    const d = new Date();
    let time = d.getTime();
    func()
    const c = new Date();
    let new_time = c.getTime()
    return Math.floor((new_time - time) / 1000)
}

