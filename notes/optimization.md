# useMemo()

`calls its function and returns the result when the dependencies changes`
Jika hanya update state di React, maka akan render seluruh Component ulang. Misalnya di dalam component kita ada satu function yang expensive ( membutuhkan waktu untuk selesai ), kemudian kita hanya mengubah state di component tersebut. Seluruh Component akan rerender ulang termasuk function yang expensive itu.
Tidak baik untuk performa bukan?

Maka kita gunakan `useMemo()`

# useCallback()

`returns its function when dependencies changes`
