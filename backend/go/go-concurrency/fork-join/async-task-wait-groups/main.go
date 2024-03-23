package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	// Define wg from sync package
	// add Operations , 1 in our case as single go routine
	var wg sync.WaitGroup
	wg.Add(1)
	now := time.Now()

	//! FORK POINT
	go func() {
		// Wait group ko btana when work() is completed
		defer wg.Done()
		work()
	}()

	//! Join Point
	wg.Wait()

	fmt.Println("work done", time.Since(now)) //* 500 ms to complete all tasks when doing in sync
}

func work() {
	time.Sleep(100 * time.Millisecond)
	fmt.Println("Task 1 done ")
}
