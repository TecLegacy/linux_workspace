package main

import (
	"fmt"
	"time"
)

func main() {
	/* Executing tasks in async
	without join model
	*/
	now := time.Now()

	// Fork point , But no join point
	go task1()
	go task2()
	go task3()
	go task4()

	//* 0s will be output as no join point is specified
	fmt.Println("work done", time.Since(now))

	// Join Point
	// ! output. Main function should exist on displaying "work done" as there is no join point
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
