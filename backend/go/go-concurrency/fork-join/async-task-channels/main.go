package main

import (
	"fmt"
	"time"
)

func main() {
	// Create a channel of type struct{}
	done := make(chan struct{})

	now := time.Now()

	//! FORK POINT
	go func() {
		work()

		// task is completed then we send it to channel
		done <- struct{}{} // this is signal that work is done
	}()

	//! JOIN POINT
	<-done

	fmt.Println("work done", time.Since(now)) //* 500 ms to complete all tasks when doing in sync
}

func work() {
	time.Sleep(100 * time.Millisecond)
	fmt.Println("Task 1 done ")
}
