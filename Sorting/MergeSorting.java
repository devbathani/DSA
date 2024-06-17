package Sorting;

public class MergeSorting {
    public static void conquer(int arr[], int startIndex, int mid, int endIndex) {
        int merged[] = new int[endIndex - startIndex + 1];
        int index1 = startIndex;
        int index2 = mid+1;
        int x = 0;
        while (index1<=mid && index2 <= endIndex) {
            if (arr[index1] <= arr[index2]) {
                merged[x++] = arr[index1++];
            }else{
                merged[x++] = arr[index2++];
            }
            
        }
        while (index1<=mid ) {
            merged[x++] = arr[index1++];
        }
        while (index2<=endIndex ) {
            merged[x++] = arr[index2++];
        }

        for (int i = 0, j = startIndex; i < merged.length; i++, j++) {
            arr[j] = merged[i];
        }
    }
    public static void divide(int arr[], int startIndex, int endIndex) {
        if (startIndex >= endIndex) {
            return;
        }
       int mid = startIndex+ (endIndex - startIndex)/2;
       divide(arr, startIndex, mid);
       divide(arr, mid + 1, endIndex);
       conquer(arr, startIndex, mid, endIndex);
    }
public static void main(String[] args) {
    int arr[] = {67,65,3,6,24,87};
    int n = arr.length;
    divide(arr, 0, n-1);
    for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i]+ " ");
    }
    System.out.println();
}
    
}
// * Time Complexity = O(nlogn);