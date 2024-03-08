package main

import (
	"log"
	"os"
	"text/template"
	"time"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.New("").Funcs(fm).ParseFiles("tpl.gohtml"))
}

var fm = template.FuncMap{
	"formattedDate": formattedDDYYMM,
}

func formattedDDYYMM(t time.Time) string {
	return t.Format("02-01-2006")
}

func main() {
	err := tpl.ExecuteTemplate(os.Stdout, "tpl.gohtml", time.Now())

	if err != nil {
		log.Fatal("Error Executing template ->", err)
	}
}
