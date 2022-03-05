
def calculate_area(name):\

  name = name.lower()
   
  if name == "rectangle":
    l = int(input("Enter rectangle's length: "))
    b = int(input("Enter rectangle's breadth: "))
     
    rect_area = l * b
    rect_circ = 2*(l + b) 
    print(f"The area of rectangle is{rect_area}.")
    print(f"The circumference of rectangle is{rect_circ}.")
 
  elif name == "circle":
    r = int(input("Enter circle's radius length: "))
    pi = 3.14
         
    circ_area = pi * r * r
    circ_circ = 2 * pi * r 
    print(f"The area of circle is{circ_area}.")
    print(f"The circumference of circle is{circ_circ}.")

     
  else:
    print("Sorry! This shape is not available")
 
if __name__ == "__main__" :
   
  print("Calculate Shape Area and circumference")
  shape_name = input("Enter the name of shape whose area you want to find: ")
   
  calculate_area(shape_name)