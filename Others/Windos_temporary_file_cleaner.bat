@echo off


title TemporaryCleaner
color F


echo _________________________________________________________________________________
echo.
echo = TemporaryCleaner                                                              =
echo = Description: removes temporary files from the temp and prefetch folders.      =
echo = Remember to run it as administrator, otherwise there will be some junk files  =
echo = will remain, which you will see in the console due to lack of permissions.    =
echo.
echo _________________________________________________________________________________


:initialize
set /p res=Do you want to run the cleaner? [y/n]
if %res% == y (
	goto continue
)else if %res% == n (
	goto cancel
) else (
	echo Invalid option, please choose a valid option.
	goto initialize
)

:continue
del %TEMP% /F /S /Q
rmdir %TEMP% /S /Q
del C:\Windows\Temp /F /S /Q
rmdir C:\Windows\Temp /S /Q
del C:\Windows\Prefetch /F /S /Q
rmdir C:\Windows\Prefetch /S /Q
color A
echo Cleaning done.
echo Thank you very much for using me!
echo Press ENTER to exit the script.
pause >nul
exit

:cancel
color 4
set /p res2=Do you want to exit the script? [y/n]
if %res2% == y (
	exit
) else if %res2% == n (
	goto initialize
) else (
	echo Invalid option, please choose a valid option.
	goto cancel
)
