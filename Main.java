 class Main{
    String name;
    int salary;
    int id;
 ;
    public static void main(String [] args)
  {
  Main emp1=new Main();
  emp1.name="Sandeep";
  emp1.salary=100;
  emp1.id=512;
  emp1.show();
  Main emp2=new Main();
  emp2.name="Arti";
  emp2.salary=200;
  emp2.id=513;
  emp2.show();
 
    }
    public void show()
    {
        System.out.println(name + salary+ id);
    }

 }
