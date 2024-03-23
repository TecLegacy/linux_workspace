package main

import (
	"fmt"
	"time"
)

func main() {
	/* Executing Sync task
	 */
	now := time.Now()
	task1()
	task2()
	task3()
	task4()

	// Simulate main function doing some task
	time.Sleep(100 * time.Millisecond)
	fmt.Println("work done", time.Since(now)) //* 500 ms to complete all tasks when doing in sync
}

func task1() {
	time.Sleep(100 * time.Millisecond)
	fmt.Println("Task 1 done ")
}
func task2() {
	time.Sleep(100 * time.Millisecond)
	fmt.Println("Task 2 done ")
}
func task3() {
	time.Sleep(100 * time.Millisecond)
	fmt.Println("Task 3 done ")
}
func task4() {
	time.Sleep(100 * time.Millisecond)
	fmt.Println("Task 4 done ")
}
